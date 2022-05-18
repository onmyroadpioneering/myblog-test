import axios from 'axios'
import qs from 'qs'
export default (req) => {
    switch (req.name) {
        case 'commit':
            {
                return new Promise((resolve, reject) => {
                    axios.get('http://82.156.239.180:3000/user', {
                        params: {
                            id: req.id,
                            pwd: req.pwd,
                        }
                    },{
                        headers:{
                            'Accept':'application/x-www-form-urlencoded',
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
        case 'logon':
            {
                let params = new URLSearchParams()
                params.append('id', req.id)
                params.append('pwd', req.pwd)
                return new Promise((resolve, reject) => {
                    
                    axios.post('http://82.156.239.180:3000/users',
                    params
                    ).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                    
                   /*
                   const url = 'http://127.0.0.1:3000/users'
                   const data = {'id':req.id,'pwd':req.pwd}
                    const options = {
                        method: 'POST',
                        headers: { 'content-type': 'application/x-www-form-urlencoded' },
                        data: qs.stringify(data),
                        url,
                      };
                      axios(options).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    })
                    */
                })
            }
        case 'inituser':
            {
  
                return new Promise((resolve, reject) => {
                    axios.get('http://82.156.239.180:3000/', {
                        params: {
                            id: req.id,
                            pwd: req.pwd,
                        }
                    }).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
        case 'initdata':
            {
  
                return new Promise((resolve, reject) => {
                    axios.get('http://82.156.239.180:3000/todo', {
                        params: {
                            id: req.id
                        }
                    }).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
        case 'updatedata':
            {
     
                return new Promise((resolve, reject) => {
                    axios.post('http://82.156.239.180:3000/todo', qs.stringify(
                        {
                            id:req.id,
                            updatetodo:req.list

                        },{
                            indices:false
                        }
                    )).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
        case 'updateuser':
            {
   
                return new Promise((resolve, reject) => {
                    axios.get('http://82.156.239.180:3000/', {
                        params: {
                            id: req.id,
                            pwd: req.pwd,
                        }
                    }).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
            case 'initblog':
                {
 
                    return new Promise((resolve, reject) => {
                        axios.get('http://82.156.239.180:3000/blog', {
                            params: {
                                id: req.id
                            }
                        }).then((response) => {
                            resolve(response)
                        }).catch((error) => {
                            reject(error)
                        });
                    })
                }
            case 'updateblog':
                {
       
                return new Promise((resolve, reject) => {
                    axios.post('http://82.156.239.180:3000/blog', qs.stringify(
                        {
                            id:req.id,
                            updateblog:req.list

                        },{
                            indices:false
                        }
                    )).then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(error)
                    });
                })
            }
    }
} 
