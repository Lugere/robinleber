<template>
    <div id="Home">
        <div class="profile">
            <div class="picture">
                <div class="face">
                    <img src="@/assets/image/rl_face2.png" alt="" />
                </div>
            </div>
            <div class="text">
                <div class="hello-world">
                    Hallo Welt! Ich bin
                </div>
                <div class="name">
                    <div class="first-name">
                        Robin
                    </div>
                    <div class="last-name">
                        Leber
                    </div>
                </div>
                <div class="job">
                    Junior Web Developer
                </div>
            </div>
            <div class="social-media">
                <a
                    rel="noreferrer noopener"
                    href="https://www.xing.com/profile/Robin_Leber2/cv"
                    target="_blank"
                    class="sm sm-xing"
                >
                    <i class="fab fa-xing" />
                </a>
                <a rel="noreferrer noopener" href="https://github.com/Lugere" target="_blank" class="sm sm-github">
                    <i class="fab fa-github" />
                </a>
                <a
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/robin-leber-b14987221/"
                    target="_blank"
                    class="sm sm-linked-in"
                >
                    <i class="fab fa-linkedin-in" />
                </a>
            </div>
        </div>
        <!-- <div data-name="" class="follow-me-header">
            Social
        </div>
        <div class="follow-me">
            <a
                rel="noreferrer noopener"
                href="https://www.xing.com/profile/Robin_Leber2/cv"
                target="_blank"
                class="sm sm-xing"
            >
                <i class="fab fa-xing" />
            </a>
            <a rel="noreferrer noopener" href="https://github.com/Lugere" target="_blank" class="sm sm-github">
                <i class="fab fa-github" />
            </a>
            <a
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/robin-leber-b14987221/"
                target="_blank"
                class="sm sm-linked-in"
            >
                <i class="fab fa-linkedin-in" />
            </a>
        </div> -->
        <div class="project-header" data-name="">Meine Projekte</div>
        <div class="projects">
            <div class="project la-luna">
                <div class="image">
                    <img src="@/assets/image/projects/la-luna.png" alt="" />
                </div>
                <div class="content">
                    <div class="title">Ristorante La Luna</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate molestias, dolorem
                        repudiandae, enim earum aliquam placeat corporis recusandae animi vero illum laudantium hic
                        deleniti optio. Ipsum dolore vitae aliquid.
                    </div>
                    <div class="links">
                        <a
                            rel="noreferrer noopener"
                            class="github"
                            role="button"
                            href="https://github.com/Lugere/la-luna"
                            target="_blank"
                        >
                            <i class="fab fa-github" />
                            Zum Github Projekt
                        </a>
                        <a
                            rel="noreferrer noopener"
                            class="web"
                            role="button"
                            href="https://www.ristorante-la-luna.de/"
                            target="_blank"
                        >
                            <i class="fas fa-globe" />
                            Zur Website
                        </a>
                    </div>
                </div>
            </div>
            <div class="project coaching-airline">
                <div class="image">
                    <img src="@/assets/image/projects/coaching-airline.png" alt="" />
                </div>
                <div class="content">
                    <div class="title">Ristorante La Luna</div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate molestias, dolorem
                        repudiandae, enim earum aliquam placeat corporis recusandae animi vero illum laudantium hic
                        deleniti optio. Ipsum dolore vitae aliquid.
                    </div>
                    <div class="links">
                        <a
                            rel="noreferrer noopener"
                            class="github"
                            role="button"
                            href="https://github.com/Lugere/la-luna"
                            target="_blank"
                        >
                            <i class="fab fa-github" />
                            Github Projekt
                        </a>
                        <a
                            rel="noreferrer noopener"
                            class="web"
                            role="button"
                            href="https://www.coachingairlineradio.de/Home"
                            target="_blank"
                        >
                            <i class="fas fa-globe" />
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.scss" lang="scss"></style>
