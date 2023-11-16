<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                ASP.NET
            </router-link>
            <a href="#" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarExample">
                <span aria-label="true"></span>
                <span aria-label="true"></span>
                <span aria-label="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarBasic">
            <div class="navbar-start">
                <router-link class="navbar-item" :to="{ name: 'todo-list' }">All Todos</router-link>
                <router-link class="navbar-item" :to="{ name: 'create-todo' }">Create Todo</router-link>

            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a href="#" class="button is-primary">SignUp</a>
                        <a href="#" class="button is-light">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>
