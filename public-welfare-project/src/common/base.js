export const getUrlParameter = (sParam) => {
  var sPageURL = decodeURIComponent(window.location.href.substring(window.location.href.lastIndexOf('?') + 1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

export const fetchGet = (requestApi, fetchPrm, successFunc, errorFunc) => {
  let thisUrl =  `${requestApi}`;
  for (let item in fetchPrm) {
    if(fetchPrm[item] === undefined) {
      continue;
    }
    thisUrl = thisUrl + `${item}=${encodeURIComponent(fetchPrm[item])}&`;
  }
  let headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };
  if(window.authorization) {
    Object.assign(headers, {
      'Authorization': window.authorization
    })
  } else {
    let accessToken = getUrlParameter('accessToken');
    if(accessToken) {
      Object.assign(headers, {
        'Authorization': `Bearer ${accessToken}`
      })
    }
  }
  fetch(thisUrl, {
    credentials: 'include',
    headers: headers
  }).then((response) => {
    const {
      status
    } = response;
    if (status >= 200 && status <300 || status === 304 || status === 422 || status ==601 || status === 401 || status === 403) {
      response.json().then( val => {
        successFunc(val);
      });
    } else {
      errorFunc(`${status}`);
    }
  }).catch((err) => {
    errorFunc(`${err.message}, GET:${thisUrl}`);
  });
};

export const fetchPost = (requestApi, fetchPrm, successFun, errorFun,method) => {
  let headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // 'Authorization': `Bearer ${access_token}`
  };
  if (window.authorization) {
    Object.assign(headers, {
      'Authorization': window.authorization
    })
  } else {
    let accessToken = getUrlParameter('accessToken');
    if (accessToken) {
      Object.assign(headers, {
        'Authorization': `Bearer ${accessToken}`
      })
    }
  }
  fetch(requestApi, {
    credentials: 'include',
    method: method || 'POST',
    headers: headers,
    body: JSON.stringify(fetchPrm)
  }).then((response) => {
    const { status } = response;
    if (status >= 200 && status < 300 || status === 304 ||
      status === 422 || status === 601 || status === 401 || status === 403
    ) {
      response.json().then((val) => {
        successFun(val);
      });
    } else {
      errorFun(`${status}`);
    }
  }).catch((err) => {
    errorFun(`${err.message},POST:${requestApi}`);
  })
};
