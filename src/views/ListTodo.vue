<template>
    <h3>{{ title }}</h3>
    <!-- <p v-for="todo in todos">{{ todo.description }}</p> -->

    <div class="container">
        <section class="section">
            <div class="columns is-multiline">
                <div v-for="todo in todos" :key="todo.id" class="column is-4">
                    <form class="box">
                        <div class="media-content">
                            <div class="content">
                                <h4 class="title is-5">{{ todo.title }}</h4>
                                <p class="mt-3">{{ todo.description }}</p>

                                <span>{{ todo.dateCreated }}</span>
                            </div>
                        </div>
                        <div class="buttons mt-4">
                            <button class="button is-small is-link is-light">
                                <router-link :to="{ name: 'todo-detailed', params: { id: todo.id } }">View
                                    Details</router-link>
                            </button>
                            <button @click="removeTodo" class="button is-small is-danger is-light">Delete Todo</button>
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
    data() {
        return {
            title: 'List of Todos',
            todos: Object
        }
    },
    created() {
        TodoService.getTodos()
            .then(response => {
                this.todos = response.data
            }).catch(e => {
                console.log(e)
            })
    },
    methods() {
        removeTodo() {
            TodoService.deleteTodo(this.id)
            .then(response => {

            })
        }
    }
}
</script>
