<template>

    <div class="home-footer">

        <ul class="footer-list">
            <li class="footer-item">
                <router-link to="/">
                PC版
                </router-link>
            </li>
            <li class="footer-item">
                <router-link to="/">
                    用户反馈
                    </router-link>
            </li>
            <li class="footer-item">
                <router-link to="/" class="active">
                    加入我们
                    </router-link>
            </li>
            <li class="footer-item">
                <router-link to="/">
                    登录
                    </router-link>
            </li>
        </ul>

        <p class="footer-copyright">上海趣游网网络科技有限公司</p>


    </div>
</template>


<script>

    export default {

        data() {
            return {


            }
        },



    }


</script>

<style lang="scss" scoped>
    @import "~common/sass/main.scss";
  
    .home-footer {
        padding:.3rem .2rem;
        background: #575658;
        font-size:.2rem;
        ul.footer-list {
          
            display: flex;
            margin: 0 -0.1rem;
            li.footer-item {
                margin: 0 .1rem;
                width: calc(25% - .2rem);
                .active{color:orange;}
                a { 
                    display:block;
                    text-align:center;
                    border-radius:.1rem;
                    background:#403e42;
                    color:#929193;
                    padding: .1rem .3rem;
                }
            }
        }

        .footer-copyright {
        margin-top:.3rem;
        text-align:center;
        font-size:.2rem;
        color:#929193;

        }

    }
</style>