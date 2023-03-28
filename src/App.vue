<template>
    <div id="app">
        <header>
            <!-- <router-link to="Home" class="name">Robin Leber</router-link> 
            <nav>
                <div class="pattern"></div>
                <ul class="links">
                    <li class="link">
                        <a rel="noreferrer noopener" href=""> Home </a>
                    </li>
                    <li class="link">
                        <a rel="noreferrer noopener" href=""> Projekte </a>
                    </li>
                    <li class="link">
                        <a rel="noreferrer noopener" href=""> Über mich </a>
                    </li>
                </ul>
            </nav> -->
        </header>
        <router-view class="app-body" />
        <footer>
            ©2023 Robin Leber
        </footer>
    </div>
</template>

<style src="./App.scss" lang="scss"></style>
