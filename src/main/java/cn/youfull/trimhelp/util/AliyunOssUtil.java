package cn.youfull.trimhelp.util;

import cn.youfull.trimhelp.config.ConstantConfig;
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSSClient;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.CannedAccessControlList;
import com.aliyun.oss.model.CreateBucketRequest;
import com.aliyun.oss.model.PutObjectRequest;
import com.aliyun.oss.model.PutObjectResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Slf4j
@Component
public class AliyunOssUtil {
    @Autowired
    private ConstantConfig constantConfig;

    /** 上传文件*/
    public String upLoad(File file){
        log.info("------OSS文件上传开始--------"+file.getName());
        String endpoint=constantConfig.getLXIMAGE_END_POINT();
        System.out.println("获取到的Point为:"+endpoint);
        String accessKeyId=constantConfig.getLXIMAGE_ACCESS_KEY_ID();
        String accessKeySecret=constantConfig.getLXIMAGE_ACCESS_KEY_SECRET();
        String bucketName=constantConfig.getLXIMAGE_BUCKET_NAME1();
        String fileHost=constantConfig.getLXIMAGE_FILE_HOST();
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
        String dateStr=simpleDateFormat.format(new Date());

        // 判断文件
        if(file==null){
            return "NOT_FILE";
        }
        OSSClient client=new OSSClient(endpoint, accessKeyId, accessKeySecret);
        try {
            // 判断容器是否存在,不存在就创建
            if (!client.doesBucketExist(bucketName)) {
                client.createBucket(bucketName);
                CreateBucketRequest createBucketRequest = new CreateBucketRequest(bucketName);
                createBucketRequest.setCannedACL(CannedAccessControlList.PublicRead);
                client.createBucket(createBucketRequest);
            }
            // 设置文件路径和名称
            String fileUrl = fileHost + (dateStr + "/" + UUID.randomUUID().toString().replace("-", "") + "-" + file.getName());
            // 上传文件
            PutObjectResult result = client.putObject(new PutObjectRequest(bucketName, fileUrl, file));
            // 设置权限(公开读)
            client.setBucketAcl(bucketName, CannedAccessControlList.PublicRead);
            if (result != null) {
                log.info("------OSS文件上传成功------" + fileUrl);
                return "https://"+constantConfig.getLXIMAGE_BUCKET_NAME1()+"."+endpoint+"/"+fileUrl;
            }
        }catch (OSSException oe){
            log.error(oe.getMessage());
        }catch (ClientException ce){
            log.error(ce.getErrorMessage());
        }finally{
            if(client!=null){
                client.shutdown();
            }
        }
        return null;
    }
}
