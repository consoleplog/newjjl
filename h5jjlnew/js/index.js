$(document).ready(function(){
        

        // 手机号码正则部分


                $('#phoneNum').bind('input propertychange',function(){
                   
                    var phoneVal = $('#phoneNum').val();
                    var reg=/^1[34578]\d{9}$/;

                        if(reg.test(phoneVal) && phoneVal.length!=0){
                            $("#tishi").css('visibility','hidden');
                            $('#huoqu_btn').removeAttr('disabled');
                             
                        } else{
                            $("#tishi").css('visibility','visible');
                            $('#huoqu_btn').attr('disabled',false);
                        }
                        
                });

       // 验证码倒计时


            var wait=60;  
            function time(o) {  
                if (wait == 0) {  
                    o.removeAttribute("disabled"); 
                    o.style.color='#fff';           
                    o.value="验证码";  
                     wait = 60;  
                } else {  
                    o.setAttribute("disabled", true);  
                    o.style.color='#ccc';
                    o.value= wait +" s";  
                    wait--;  
                    setTimeout(function() {  
                    time(o)  }, 1000)  
                }
            }

            $('#huoqu_btn').bind("click",function(){time(this)})


       
        //红包弹遮罩

            $('.hb_inner').click(function(){
                $('.zhezhao').css('display','block')
                var o=false;
                if(o){
                    $('.tanchu_hongbao').css('display','block');
                    $('.tanchu_hongbao1').css('display','none');
                    $('.zhezhao').click(function(){
                        $('.zhezhao').css('display','none');
                        $('.tanchu_hongbao').css('display','none');
                        $('.tanchu_hongbao1').css('display','none');
                    });
                }else{
                    $('.tanchu_hongbao1').css('display','block');
                    $('.tanchu_hongbao').css('display','none');
                     $('.zhezhao').click(function(){
                        $('.zhezhao').css('display','none');
                        $('.tanchu_hongbao').css('display','none');
                        $('.tanchu_hongbao1').css('display','none');
                    });
                };

            });

//登录页面 点击获取验证码

            $('#huoqu_btn').bind('click',function(){
                var phoneVal = $('#phoneNum').val();
                var url ='https://www.1zhuowang.com/api/loginSmsCode'
                $.ajax({
                    url: url,
                    method: 'post',
                    dataType: 'jsonp',
                    data: {mobile:phoneVal},
                    success: function(data){

                        console.log(data)
                        
                    },
                    error:function(){
                    
                     console.log('error')
                    }
                })
            })

//登录页面  登录按钮 
            // $('#sub_btn').click(function(){
            //     var yzcode = $("#yzcode").val();
            //     var phoneVal = $('#phoneNum').val();
            //     var url ='https://www.1zhuowang.com/api/loginSmsCode'
            //     console.log(url)
            //     $.ajax({
            //         url: url,
            //         method: 'post',
            //         dataType: 'jsonp',
            //         data: {mobile:phoneVal,smsCode:yzcode},
            //         success: function(data){

            //             // console.log(data)
            //             if(data.doc.success=='true'){
            //                

            //             }else if(data.doc.success=='false'){
            //                
            //                 console.log('验证码不正确请从新输入 ')
            //             }
                        

            //         },
            //         error:function(){
                        
            //          console.log('数据获取失败 用户未注册')
            //         }
            //     })
            // })

// for test
             $('#sub_btn').click(function(){
                var yzcode ='123456';
                var phoneVal = '18201413066';
                var url ='http://192.168.1.87:8080/api/u/login';
                // console.log(yzcode);
                $.ajax({
                    url: url,
                    method: 'post',
                    dataType: 'jsonp',
                    data: {mobile:phoneVal,passwd:yzcode},
                    success: function(data){


                        if(yzcode==''){
                            $('body').append(
                                "<span class='yz_tishi'>验证码不能为空</span>"
                                );
                            setTimeout(function(){
                                $('.yz_tishi').remove(this);
                            },3000);
                        };
                         if(data.doc.head.success==true){
                                window.location.href='./huiyuanjf.html';

                            }else{
                                $('body').append(
                                        "<span class='yz_tishi'>验证码错误</span>"
                                    );                           
                                     setTimeout(function(){
                                    $('.yz_tishi').remove(this);
                                },3000);
                            };

                        console.log(data)
                        

                    },
                    error:function(){
                        
                     console.log('数据获取失败 用户未注册')
                    }
                })
            })            



                   

                    // setTimeout(function tishi(){
                    //         $('.yz_tishi').prop('display','none');
                    //     },ti*1000);
                             
                   


            














        })