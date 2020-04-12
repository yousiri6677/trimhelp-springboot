package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.entity.User;
import cn.youfull.trimhelp.entity.UserEx;
import cn.youfull.trimhelp.service.UserService;
import com.alibaba.fastjson.JSONObject;
import com.zhenzi.sms.ZhenziSmsClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;


@Controller
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Resource(name = "redisTemplate")
    private ValueOperations<String, String> redisStr;

    @Value("${pageSize}")
    private String pageSize;

    @RequestMapping("/getPersonalDemandinfo")
    @ResponseBody
    public Map<String,Object> getPersonaDemandlinfo(long id) throws InstantiationException, IllegalAccessException {
        UserEx userEx = userService.getPersonalDemandByUserId(id);
        Map<String, Object> map = new HashMap<>();
        map.put("personal_demand_info",userEx);
        map.put("pageSize",pageSize);
        return map;
    }


    @PostMapping("/login")
    @ResponseBody
    public String login(String account, String passWord, HttpSession session) {
        User user = userService.loginByAccountAndPassWord(account, passWord);
        if (user != null) {
            session.setAttribute("user", user);
            return "SUCCESS";
        } else {
            return "ERROR";
        }
    }

    @ResponseBody
    @RequestMapping("/loginOut")
    public String loginOut(HttpSession session) {
        session.removeAttribute("user");
        return "success";
    }


    @PostMapping("/register")
    @ResponseBody
    public String register(UserEx user, HttpSession session) {
        log.info("注册！！！！！！！！！！！！！！");
        System.out.println(user +redisStr.get("CODE:" + user.getPhone()));
        if (user.getPhoneCode().equals(redisStr.get("CODE:" + user.getPhone()))) {
            log.info("注册！！！！！！！！！！！！！！");
            int i = userService.addUser(user);
            if (i > 0) {
                session.setAttribute("user", user);
                return "SUCCESS";
            } else {
                return "ERROR";
            }
        }else {
            return "CODE_ERROR";
        }
    }

    //短信平台相关参数
    private String apiUrl = "https://sms_developer.zhenzikj.com";  //平台地址
    private String appId = "104923";   //id
    private String appSecret = "d45c2fce-ed04-4ba2-9a7e-670e038374f1";  //实例

    //绑定手机号 获取验证码 成功后 添加到用户中
    @RequestMapping(value = "/phone")
    @ResponseBody
    public Object addPhone(@RequestParam(value = "phone", required = false)
                                   String phone, HttpSession session) {
        try {
            JSONObject json = null;
            //随机生成验证码
            String code = String.valueOf(new Random().nextInt(999999));
            //将验证码通过榛子云接口发送至手机
            ZhenziSmsClient client = new ZhenziSmsClient(apiUrl, appId, appSecret);
            String result = client.send(phone, "您的验证码为:" + code + "，该码有效期为5分钟，该码只能使用一次!");
            json = JSONObject.parseObject(result);  //装换为object json格式
            if (json.getIntValue("code") != 0) {//发送短信失败
                return false;
            }
            redisStr.set("CODE:" + phone, code, 5, TimeUnit.SECONDS);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }


}
