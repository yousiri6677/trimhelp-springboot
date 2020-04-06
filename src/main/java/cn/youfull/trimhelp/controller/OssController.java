package cn.youfull.trimhelp.controller;

import cn.youfull.trimhelp.util.AliyunOssUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Controller
public class OssController {
    private static final String TO_PATH = "upLoad";
    private static final String RETURN_PATH = "success";

    @Autowired
    private AliyunOssUtil aliyunOSSUtil;

    @RequestMapping("/toUpLoadFile")
    public String toUpLoadFile() {
        return TO_PATH;
    }

    /**
     * 文件上传
     */
    @RequestMapping(value = "oss/uploadFile")
    @ResponseBody
    public Map<String, Object> uploadBlog(@RequestParam("file") MultipartFile file) {
        log.info("文件上传");
        Map<String, Object> map= new HashMap<>();
        if (file==null||"".equals(file.getOriginalFilename())){
            map.put("code",404);
            map.put("msg","未选择上传文件");
            map.put("file_url","");
        }
        String filename = file.getOriginalFilename();

        try {
            if (file != null) {
                if (!"".equals(filename.trim())) {
                    File newFile = new File(filename);
                    FileOutputStream os = new FileOutputStream(newFile);
                    os.write(file.getBytes());
                    os.close();
                    file.transferTo(newFile);
                    // 上传到OSS
                    String uploadUrl = aliyunOSSUtil.upLoad(newFile);
                    map.put("code",200);
                    map.put("msg","上传成功");
                    map.put("file_url",uploadUrl);
                }

            }
        } catch (Exception iex) {
            map.put("code",0);
            map.put("msg","上传失败");
            map.put("file_url","");
            iex.printStackTrace();
        }
        return map;
    }
}
