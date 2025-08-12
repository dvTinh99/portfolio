<template>
    <div class="gist mb-5">
        
        <!-- head info -->
        <div class="flex justify-between my-2">

            <div class="flex">
                <!-- avatar -->
                <img src="https://avatars.githubusercontent.com/u/66030457?s=96&v=4" alt="" class="w-8 h-8 rounded-full mr-2">
    
                <!-- username & gist date info -->
                <div class="flex flex-col">
                    <a id="username" :href="'https://github.com/' + social.github.user" target="_blank" class="font-fira_bold text-purple-text text-xs pb-1 hover:cursor-pointer">
                        @{{ social.github.user }}
                    </a>
                    <p class="font-fira_retina text-xs text-menu-text">Created 1 months ago</p>
                </div>
            </div>
            
        </div>

        <highlightjs
            language="js"
            code="console.log('Hello World');"
        />
    </div>
</template>

<script setup lang="ts">
import config from '~/developer.json';
const social = ref(config.contacts.social);
</script>

<script lang="ts">
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
    components: {
        highlightjs: hljsVuePlugin.component
    }
}
</script>

<style>
.snippet-container {
    background-color: #011221;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #1E2D3D;
    font-size: 12px;
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 220px;
}

.snippet-container pre {
    margin: 0;
    overflow: hidden;
    width: 100%;
    max-height: 220px;
}

.snippet-container code {
    white-space: pre-wrap;
    max-height: 220px;
    width: max-content;
    overflow: hidden;

}

.snippet-container::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

pre code.hljs{
    display:block;
    /* overflow-x:auto; */
    padding:1.5em
}

code.hljs{
    padding:3px 5px
}

#comment {
    font-size: 14px;
}

#username:hover {
    color: #5e6ef2;
}

/* #comment {
    
} */

.hljs{color:#85a9ce;background:#011221}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}

</style>