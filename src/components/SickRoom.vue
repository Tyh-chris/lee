<template>
<div>
<el-container>
  <el-header >
    <el-row class="top-contain">
        <el-col :span="6" :offset="6" class="top-l">{{address}}</el-col>
         <el-col :span="10" >
             <div class="date-contain"><span class="date">2017年04月11日   {{Week}} 17:23</span></div>
        </el-col>
    </el-row>
  </el-header>
  <el-main id="main">
      <div class="call-contain">
          <span> 101 01 张三</span> 
        </div>   
        <div class="information-contain">
          <el-row :gutter="20">
                <el-col :span="8"  :item=patient v-for="item in patient" :key="item.Id">
                    <div class="in-content">
                       <div class="patient">
                           <span>{{item.num}}--{{item.name}}</span> 
                           <span>护理级别：{{item.level}}</span> 
                        </div>   
                       <div class="doc-nur" :class="{needhelp:needhelp1&&item.id==1||needhelp2&&item.id==2||needhelp3&&item.id==3}">
                       <div class="doctor-div">
                           <img src="item.doctorImg" alt="" width="70%">
                           <p>责任医生</p>
                           <p>{{item.doctor}}</p>
                        </div>           
                        <div class="nurse-div">
                           <img src="../../static/doctor.jpg" alt="" width="70%">
                           <p>责任护士</p>
                           <p>{{item.nurse}}</p>
                        </div>   
                     </div>
                    </div>
                </el-col>
         </el-row>       
      </div>
  </el-main>
</el-container>
</div>
</template>

<script>
  var mydate=new Date();
            var date=mydate.getFullYear()+"年"+mydate.getMonth()+1+"月"+mydate.getDate()+"日";
            var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            var mynum=mydate.getDay();
            var week= weekday[mynum];
            var hour=mydate.getHours();
            var minute=mydate.getMinutes();
            var time=hour+":"+minute;
            var currentdate=date+" "+week+" "+time;
            document.write(currentdate);
export default {
    name:"SickRoom", 
    mounted:function(){
            var orderheight=document.body.clientHeight;
            var main=document.getElementById("main");
            main.style.height=orderheight-60+'px';
            
        },
    data(){
        return{
            address:"肿瘤内科四区",
           Week:week,
           needhelp1:true,
           needhelp2:true,
           needhelp3:false,
           patient:[
                {
                    id:"1",
                    name:'张三',
                    num:'01号床',
                    level:'A',
                    doctor:'XXX',
                    doctorImg:'../../static/doctor.jpg',
                    nurse:'XXX',
                    nurseImg:'../../static/doctor.jpg'
                },
                {
                    id:"2",
                    name:'李四',
                    num:'02号床',
                    level:'A',
                     doctor:'XXX',
                    doctorImg:'../../static/doctor.png',
                    nurse:'XXX',
                    nurseImg:'../../static/doctor.png'
                },{
                    id:"3",
                    name:'李四',
                    num:'03号床',
                    level:'A',
                     doctor:'XXX',
                    doctorImg:'../../static/doctor.png',
                    nurse:'XXX',
                    nurseImg:'../../static/doctor.png'
                },
                ],
        }
    },
  
   
}
</script>

<style>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 4rem;
    padding: 0px; 
   
  }
   .el-main {
    background-color:rgb(60, 102, 116);
    color: #333;
    text-align: center;
   
  }
  .top-contain{
      background-color:  rgb(54, 87, 100);
  }
  .top-l{
      color: white;
  }
  .date{
      background-color: rgb(31, 51, 59);
      color: white;
      padding: 10px 30px;
       border-radius: 5px;
  }
  .call-contain{
       box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0.5);
      background-color: rgb(88, 131, 148);
  }
  .call-contain span{
      font-size: 2rem;
      line-height: 4.5rem;
      color: white;
  }
  .patient{
      background-color:  rgb(19, 130, 158);
      line-height: 2.5rem;
      color: yellowgreen;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  }
  .patient span{
      padding: 0 9px;
  }
  .doctor-div{
      width: 50%;
      float: left;
  }
  .nurse-div{
       width: 50%;
      float: left;
  }
  .doc-nur{
      background-color: rgb(120, 197, 197);
      padding-top: 1rem;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
  }
.doc-nur::after{
    content: "";
    display: block;
    clear: both;
}
.information-contain{
    margin:53px;
}
 .in-content {        /*在el-col下加div包裹，class为in-content，设置border-rradius无用*/ 
    border-radius: 4px;
    min-height: 36px;
  }
  .needhelp{
      background-color: rgb(221, 164, 58);
  }
</style>