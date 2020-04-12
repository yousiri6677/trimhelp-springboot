package cn.youfull.trimhelp.util;


import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;

import java.util.LinkedList;
import java.util.List;

public class CopyListUtil {

    public static final <T> List<T> copyList(List l1, Class<T> c) throws IllegalAccessException, InstantiationException {
        T t = null;
        List<T> l=new LinkedList<>();
        for (Object o : l1) {
            t = c.newInstance();
            BeanUtils.copyProperties(o, t);
            l.add(t);
        }
        return l;
    }

    public static final <T> T copyJavaBean(Object o,Class<T> c){
        T t=null;
        try {
            t=c.newInstance();
            BeanUtils.copyProperties(o,t);
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return t;
    }
}
