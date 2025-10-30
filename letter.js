let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "http://cv-senior-engineer.gitee.io/pleasantly-surprised/images/qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '宝宝写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，像是一只温顺的小兽。<姜雨薇同学今天是我们谈恋爱的第211天啦!我们在这211内一起经历了很多事情有开心也有争吵，虽然有的时候我们吵的不可开交，也可能没人让步，但是这些丝毫没有影响我对你的感情。<我很感谢宝宝让我知道了真正的恋爱关系。是不舍，是心疼，是无论怎么样都不忍心抛弃对方。<我知道我很气人我不会哄人没有男子气概有的时候还是一个小气鬼斤斤计较的。我知道宝宝也一直在包容着我，我能感受到宝宝炙热的心和爱意。我有的时候就是很没有安全感宝宝一说我我就更当真了感觉宝宝就是要不要我了。<现在我也明白了气话不能太当真。宝宝我爱你很爱很爱你我不想要失去宝宝。用宝宝的话来说"我们之间的爱情是与众不同的，所有的一切都刚刚好。我们就是最好的，比所有的情侣都要好。"<我真的真的很希望以后在宝宝身边的人是我，我可以一直成为宝宝的大靠山。我会为此努力的。很感谢宝宝对我这211天的照顾，我真的很希望我们两个可以互相依靠一直一直在一起直到永远醒不来。<---爱你的冯江涛'

let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})

