import {fetchGet, fetchPost} from "./base";
import {FETCH_FAILED, FETCH_SUCCESS, UNAUTHORIZED_CODE, NOLOGIN, RELOGIN} from '../const/const';
//fetch get
export const welfareGet = (jrApi, fetchPrm = {}) => {
  return new Promise(function (resolve, reject) {
    fetchGet(jrApi, fetchPrm, function (ret) {
      //登陆失败
      if (ret.code === RELOGIN || ret.code === NOLOGIN) {
        location.href = '#/login';
        return;
      }
      //没有权限
      if (ret.code === UNAUTHORIZED_CODE) {
        location.href = '#/home';
        return;
      }
      //成功
      switch (ret.state) {
        case FETCH_SUCCESS:
          resolve(ret);
          break;
        default:
          reject();
          alert(ret.message);
      }
    }, function (res) {
      reject();
      console.log(res);
    })
  })
};

//fetch post
export const welfarePost = (jrApi, fetchPrm = {}, method) => {
  return new Promise(function (resolve, reject) {
    fetchPost(jrApi, fetchPrm, function (ret) {
      if (ret.code === RELOGIN || ret.code === NOLOGIN) {
        location.href = '#/login';
        return;
      }
      if (ret.code === UNAYTHORIZED_CODE) {
        location.href = '#/home';
        return;
      }
      switch (ret.state) {
        case FETCH_SUCCESS:
          resolve(ret);
          break;
        default:
          reject();
          alert(ret.message);
      }
    }, function (res) {
      reject();
    }, method)
  })
};
