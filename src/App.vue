<template>
    <div id="app">
        <header>
            <div class="name">Robin Leber</div>
            <nav>
                <div class="pattern"></div>
                <ul class="links">
                    <li class="link">
                        <a href=""> Home </a>
                    </li>
                    <li class="link">
                        <a href=""> Projekte </a>
                    </li>
                    <li class="link">
                        <a href=""> Über mich </a>
                    </li>
                </ul>
            </nav>
        </header>
        <router-view class="body" />
    </div>
</template>

<style src="./App.scss" lang="scss"></style>
