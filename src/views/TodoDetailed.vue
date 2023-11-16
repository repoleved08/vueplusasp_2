<template>
    <h3>Detailed for id {{ todo.id }}</h3>
    <div class="container">
        <section class="section">
            <div class="columns is-centered">
                <div class="column is-7">
                    <form class="box">
                        <div class="media-content">
                            <div class="content">
                                <h4 class="title is-5">Title: {{ todo.title }}</h4>
                                <p class="mt-4">Description: {{ todo.description }}</p>
                                <span class="mt-3">Date Created: {{ todo.dateCreated }}</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TodoService from '@/service/TodoService';

export default {
    props: ['id'],
    data() {
        return {
            todo: Object,
        }
    },
    created() {
        TodoService.getSIngleTodo(this.id)
            .then(response => {
                this.todo = response.data
            })
            .catch(e => {
                console.log(e)
            })
    }
}
</script>
