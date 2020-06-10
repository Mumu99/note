### html 晨测

- 常见浏览器及内核
	chrome blink  -webkit-
	safari blink  -webkit-
	firefox gecko -moz-
	ie     trident -ms-
	opera   blink  -webkit-
- web的标准构成
	结构(html)、样式(css)、行为(JavaScript)
- 解释一下<!doctype html>
	Doctype在第一行,版本声明,告诉浏览器用什么样的文档类型来解析
- 如何解决网页乱码
	<meta http-equiv=”Content-Type” content=”text/html; charset=utf-8″>
- a标签的基础使用
	1.a标签主要用来做跳转
	2.a标签就是超链接，可以创建通向其他文件，或者是位置地址，创建邮件，电话，短信
	属性：
		href:
			用来书写链接地址
		title:
			当鼠标悬停在a标签上的时候，对当前链接信息的一个提示，是一个弹窗显示
		target：
			控制当前窗口跳转还是新标签页打开
			值是_blank:在标签页打开
			值是_self:在当前窗口跳转(默认)
- img标签title和alt的用法
    title:鼠标悬停的时候，对图片的介绍
    alt:当图片加载不出来的时候对图片的解释
- label标签的用法
	1.label标签包含住标注文本，让label元素的for属性的值=相对应表单的id属性的值
	2.label包含住整个标注和表单，此时label不允许再有for属性
- button和input按钮的区别
	button可以设置文本和图像而input不可以
- a标签的锚链接怎么设置
	给a标签设置href属性 #+(对应跳转元素的id属性的值)
	给相对应的跳转元素 一个id属性，然后对id属性的值进行自定义名字
- 图片格式 及 应用场景
	jpg:当图片不是透明或者动图的时候用jpg，占用小
	png:透明图
	gif:动态图
- 行标签的属性
	不独占一行，不可设置宽高，只能包含行元素
- 块标签的属性、
	独占一行，可设置宽高，可包含块级元素以及行内元素
- input的type类型及解释
	text:文本、password:密码、radio:单选框、
	checkbox:多选、file:文件域、submit:提交
- 写出常用的块标签和行标签
	块：div、h1-h6、p、ol、ul、li
	行：a、span、b、i、
- table的跨行和跨列怎么设置
	rowspan设置给th或者td标签
	colspan设置给th或者td标签
- html的语义化
	1.语义化标签具有可读性，便于开发和维护
	2.没有css的情况下，网页也能清晰的展示出内容和代码结构
	3.关于seo，搜索引擎能理解网页中个部分之间的关系，更加准确的搜索到信息
- 写出html5中新的 结构性标签 及相应的含义
	header:头部、footer:底部、nav:导航、time:时间、section:标题设置
- 对于article section div 说出你的理解
	1.div没有语义，可以用做任何场景，但是就导致上下文关系不明确
	2.对于主题性的块，一般使用section
	3.如果这个区域脱离了上下文，独立存在就用article
- input的新属性及解析
	placeholder:占位符、autocomplete:提示文字、required:表单必填，如果表单没有内容则不会提交
	disabled:禁用表单元素，也可以禁用提交
	readonly:禁用用户修改，不能禁用表单提交
	checked:选中
- input的新type类型及解释
	color:颜色、date:日期、week:周、email:邮件、number:数字
- css 的3种引入方式书写
	1.行内引入
	2.头部引入
	3.外部引入
- 浏览器渲染流程
	1.浏览器开始解析html，执行的顺序从上至下
	2.html解析器会将html结构转换成dom树
	3.css解析器会将css解析为cssom
	4.cssom树和dom树结合构成渲染树
	5.计算渲染树上各个元素的位置信息，也就是布局阶段
	6.将拥有布局信息的渲染树显示在浏览器上
- 重绘重排
	重绘:样式发生颜色、背景颜色等不影响布局的因素导致渲染树更新的
	重排(回流):当渲染树的一部分或者全部因为元素的尺寸，布局等引起页面重新渲染的
- @import和link的区别
	1.link是书写在head标签中，而@import是书写在css中
	2.页面在加载的时候link会同时加载，而@import引入的只有等页面全部加载完才能加载
	3.link全兼容而@import低版本不兼容
- 颜色设置的几种写法
	rgba,rgb,#ff,red
- rgba和opacity的区别
	rgba只是单单是一个颜色，只能对颜色进行透明，而opacity是属性，是整个元素都透明
- display和visibility隐藏的区别
	display:不占空间，不继承，隐藏的元素js无法获取
	visibility:占空间，会继承给子元素，隐藏的元素js可获取
- display常见的值及解释
	none(隐藏)、block(显示)、inlne-block(行内块)、block(块)、inlne(行)
- overflow常见的值及解释
	hidden(隐藏)、visible(默认,超出不会隐藏)、scroll(超出生成滚动条)、auto(浏览器定夺)
- overflow的scroll和auto的区别
	auto(内容超出生成滚动条)
	scroll(无论内容是否超出都会生成滚动条)
- 背景图的合写
	background(url("")center center no-repeat)
- 如何引入外部字体包
	@font-face{}
- 让一个图片水平垂直居中
	父级设置line-height使基线在最下，然后给图片设置vertical-align:middle
- 为什么垂直方向margin auto不起作用
	块级元素在垂直方向没有满屏属性margin默认在上下的值都是0
- margin后跟1 2 3 4 个值的时候 代表的含义
	1:上 2:右 3:下 4:左
- css画一个三角形
	宽高都为0;四边的最下边设置边框为可见
- 盒子模型完整的概念
	由content+margin+padding+border
- 负margin对标签各个方向的效果
	向左，向上，元素向该方向移动，但是不会占用他人空间
	向右，向下，元素不动，自身大小不变，后边的元素会覆盖上来
- 行块标签对margin和padding的支持性
	padding用来撑开父子元素之间的距离
	margin用来撑开兄弟元素之间的距离
- 包含块
	如果是relative或者static定位，包含块就是它的父级
	如果是absolute，他的包含块就是离他最近的父级的定位
	如果是fixe，他的包含块是viewport
- 清除浮动的方法（3种）
	overflow:hidden
	:after{
		content:"";
		clear:both;
		display:block;
	}
	给父级设置浮动
- a标签的4个伪类及顺序
	link>visited>hover>active
- css sprites
	精灵图，雪碧图，把很多张小图片放到一张大图中
	优点：
		减少服务器访问，降低服务器压力
		文件大小更小
- 最小高度 最大高度 宽度的设置及优先级
	min-height、max-height、min-width>max-width>width
- csshack 是什么  有哪些方法
	因为浏览器不同，所以渲染就不同，针对某个浏览器写不同的样式
	ie条件注释、css属性前缀、选择器前缀
- 为什么要样式重置
	因为很多样式是浏览器自带，并且浏览器的兼容性有问题，所以重置同意风格
- BFC是什么 及构成BFC的方式 及解决的问题
	块级格式化上下文
	html根元素、float不为none、绝对定位和固定定位、行内块
	清除浮动，清除父级塌陷，识别浮动元素
- 水平垂直的四种方法

​   1.在已知被居中元素的宽高时，在用定位的时候，用calc方法去计算left和top的值，即50%-自身宽高的一半即可。
   2.在已知被居中元素的宽高时，利用定位使top和left都移动50%然后再利用margin负值去移动自身的一半。
   3.利用四边都为0，然后利用margin-auto 使垂直水平上有了可分配的空间，即可垂直水平居中
   4.利用定位的把top和left都移动50%，然后利用c3的属性translate根据自身定位向反方向移动自身的一半

- 描述圣杯和双飞翼布局

    1.圣杯布局
        圣杯布局是三列布局，左右两边固定宽，中间自适应，中间一块要在浏览器中优先渲染。
        主要包括center,left,right，全部浮动，然后left和right设置margin负值，然后利用相对定位，使其定位到左右两边。

        缺点：如果浏览器缩小的话，中间比例小到一定的程度就会变乱，所以得设置min-width。
    2.双飞翼布局
        双飞翼布局，是三列布局，左右两边固定宽，中间是用一个div包裹，使左右和包裹的div浮动center不浮动，在内部用center用margin去空出间隙，然后调整margin负值去进行调整。

- 描述等高

    1.将元素的padding-bottom设置成很大，然后再把margin-bottom的负值也设置成很大的值。然后父级就是其他的子级去撑大的。然后给父级设置一个overflow-hidden即可

- 圆角边框

    border-radius

- 文本阴影及后边值的含义

    1.text-shadow 第一个值为x的偏移量，第二为y的偏移量，第三为模糊程度，第四为颜色
- 1、文本溢出省略号
    1.定一个容器的宽高固定，然后利用white-space:nowrap属性使其在一行显示，然后用overflow:hidden属性使其超出隐藏，再设置text-overflow:ellipsis使其超出显示省略号
        <!-- 定一个容器的宽度，然后利用white-space:nowrap属性使其在一行显示，再利用overflow:hidden属性溢出隐藏，再设置text-overflow：ellipsis属性显示出... -->
- 2、盒子阴影值
    1.第一个值为insert，默认是向外，第二个值为x的偏移量，第三个值为y的偏移量，第四个值为模糊程度，第五个值为外延值
        <!-- 1、insert是否为内阴影，x，y，模糊程度，外延值 -->
        
- 3、多列设置
    1.column-count为设置的列数
    2.column-gap设置的是每列的间距
    3.column-rule设置的是每列间隙之间的分割线
    4.column-span设置跳出分列
        <!-- column-count 为几列
        column-gap为间距
        column-rule 为分割线
        column-span跳出分列 -->
- 4、线性渐变
    1.linear-gradient默认从上到下的颜色渐变
    2.可以写to left top right bottom 等确定的方向
    3.渐变要放在background中
    4.0deg朝上，顺时针旋转
        <!-- linear-gradient默认从上到下的渐变
        0deg朝上 顺时针旋转
        可以写to top left bottom right -->
- 5、背景设置
- ps:背景图的设置 请书写在背景图引入之后，否则不生效
    1.background-size背景图大小
        1.1:单位：后面跟一个值代表x轴，y轴比例缩放 跟两个值用空格隔开代表x和y
            百分比：百分比相对容器(取决于背景图原点)有两个值都是100% 充满容器，但比例可能失真
        1.2:cover：等比例缩放图片 缩放到图等全部填满容器为止 图片可能会超出      容器
        1.3:contain:等比缩放图片，缩放到任意一边充满容器位置 容器可能会有空白
    2.background-origin 背景图的原点
    3.background-clip   背景图裁剪
        <!-- background-color,
        background-size,    一个值为x轴， y比例缩放 两个值为x，y 百分比是相对于原点，两个值为100%，则充满容器，图片可能会失真
        background-clip 裁剪
        background-origin 背景图原点 -->
- 倒影写法
    1.Box-reflect:above 10px liner-gradient(to right,rgba(0,0,0,.5),transparent)
    <!-- box-reflect:above 10px linear-gradient(to right,#000,transparent)
    above below  -->
    <!-- 方向为 above right left below
    反射偏移量 可以为负值
    遮罩图像 颜色对倒影没有影响，透明度可以 -->
        第一个值为：方向(above,right,below,left);
        第二个值为：反射偏移的位置是多少，可以是单位，也可以是负值
        第三个值为：遮罩图像(颜色对倒影无影响，透明度可以)
    2.倒影不占空间，保留原来的位置
- 过渡动画完整简写 每一个值的用处
    1.transition:all 2s linear 1s
        第一个值为：设置哪个元素执行动画
        第二个值为：执行动画所需要的的时间
        第三个值为：动画执行类型，可用贝塞尔曲线
        第四个值为：延迟多久执行
- 4种变形分别是什么
    1.rotate:旋转
    2.scale:缩放
    3.skew:扭曲
    4.translate:位移
- 变换基点怎么改变
    1.分为x和y轴，可用是单位，也可以是百分比，
    2.x轴上分别为 left，right，center
    3.y轴上分别为 top，bottom，center
- 变形的简写 分别代表1个值还是两个值
    scale(1.1),代表的是x和y轴均放大1.1倍
- 开启3d和景深设置
    1.transform-style:preserve-3d
    2.perspective:200px
    3.景深必须配合开启3d使用
    4.近大远小
- 改变观察者视角
    1.preserve-origin
    2.第一个值为：x轴的位置
    3.第二个值为：y轴的位置
    4.百分比相对于自身的宽高
- 书写一个关键帧动画 并调用（说明每个值用法）
    @keyframes mu{
        0%{
            width:100px;
            height:100px;
        }
        100%{
            width:200px;
            height:200px;
        }
    }
    animation:mu 2s 1s linear infinite
    第一个值为动画名称
    第二个值为动画执行的时间
    第三个值为延迟多久执行
    第四个值为动画执行曲线
    第五个值为循环播放
- 动画开始结束状态
    animation-fill-mode:backwards/forwards
    backwards为动画始终在第一帧
    forwards为动画执行完，停在第最后一帧
- 动画暂停和播放
    animation-play-state:running/paused
    running为播放
    paused为暂停
- 元素背面不可见
    backface-visibility:hidden/visible
    hidden：隐藏
    visible：显示
- 请说出less的几个特点（4）
    1.计算，嵌套，变量，混合
    1_1:计算：第一个值的单位和第二个值的单位不相等的时候，结果为第一个值的单位，如果只有一个值有单位，结果即为这个值的单位
    1_2:嵌套：嵌套默认是后代选择器，可以在前边加上大于号，就可以变为子代选择器
             使用&符号，在父级中，代替父级            
    1_3:变量：分为四种：
                第一种：当做一个普通的值来使用 @mu:red;
                第二种：当做选择器来使用 @mu:.box;  在引用的时候@{mu}{width:100px}
                第三种：当做属性名来使用 @mu:background;  @{mu}:red;
                第四种：当做一个url来使用 @ur:"http://baidu.com";用引号  @{mu}:url(@ur);
    1_4:混合(mixin)：定义混合 .mame(){};  调用混合  .name();
- flex属性随机提问
flex-direction:row row-reverse column column-reverse
justify-content:flex-start flex-end center space-around space-between space-evenly
align-items:flex-start flex-end center stretch baseline
flex-grow:1
flex-wrap: wrap nowrap wrap-reverse
align-content:flex-start flex-end

    flex-direction:改变主轴位置
        row：默认，主轴从左到右
        row-reverse：主轴从右到左
        column：主轴从上到下排列
        column-reverse：主轴从下到上
    justify-content:主轴富余空间管理，不管方向，只管主轴的开始和结束的方向
        flex-start:项目从主轴开始处依次排列
        flex-end:项目从主轴结束处依次排列
        center:项目居中
        space-around:富余空间包含项目
        space-between:项目包含富余空间
        space-evenly:所以项目间隙相等
    align-items:侧轴富余空间管理
        flex-start:项目从侧轴开始处排列，高度可设置或者由内容撑开
        flex-end:项目从侧轴的结束处排列，高度可设置或者由内容撑开
        center:项目整体居中
        stretch:项目在侧轴上充满(默认)
        baseline:项目在侧轴的基线对齐，高度可设置或者内容撑开
    flex-grow:富余空间分配给项目(设置给项目)
        综合所有项目的flex-grow的值，然后把富余空间平分，按需要进行分配，无论主轴在哪里，都可以分配
    flex-wrap:控制项目超出容器后换行
       1.换行以后，容器被平分成了两半，每一半站一边。
       2.换行后每一行互不影响，主轴和侧轴都出现了单行的富余空间
       3.align-items：center：只能控制这一行在中间的行行中居中
       wrap：换行
       nowrap：不换行
       wrap-reverse：换行且改变主轴方向
    align-content:换行后控制整个侧轴的富余空间分配
        flex-start:整个项目靠侧轴的开始
        flex-end：控制项目靠侧轴的结束
        center:整体居中
        space-around:富余空间包含项目
        space-between：项目包含富余空间
        space-evenly：所以项目间隙相等
        //////////////ps：align-content的优先级要高于align-items
    order：设置项目的显示顺序
        order>没有书写order或者order为0,>order为正
    align-self:项目单独在侧轴的位置
        flex-end：靠下
        flex-start：靠上
        center:居中
    flex-flow:是flex-wrap和flex-direction的简写
    flex-shrink:控制收缩率。flex项目超出容器后，会对项目进行收，每一个项目收缩的大小都是和它自身的收缩率相关，默认为1
    flex-basis：项目在主轴所占用的宽度和高度
    flex属性：
        flex-basis、flex-grow、flex-shrink的简写
        默认值为:aut0、0、1
        flex:2 即为：flex-grow为2