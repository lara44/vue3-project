<template>
    <v-card>
        <v-container>
            <v-card-title>
                <v-row>
                    <v-col md="8" sm="6" cols="12">
                        List of users
                        <v-btn class="btn-table" color="#607D8B" variant="text" icon> <v-icon>mdi-plus-box mdi-24px</v-icon>
                            <v-tooltip activator="parent" location="start">Nuevo Registro</v-tooltip>
                        </v-btn>
                    </v-col>
                    <v-col md="4" sm="6" cols="12">
                        <v-text-field density="compact" variant="outlined" icon label="Search users"
                            append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-table density="compact">
                    <thead>
                        <tr>
                            <th class="text-left">Options</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Email</th>
                            <th class="text-left">Create At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userStore.listUsers" :key="user.id">
                            <td md="2">

                                <v-btn class="btn-table" color="#e59e06" variant="text" icon> <v-icon>mdi-lead-pencil
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Editar</v-tooltip>
                                </v-btn>
                                <v-btn class="btn-table" color="#607D8B" variant="text" icon> <v-icon>mdi-buffer
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Detalle</v-tooltip>
                                </v-btn>

                                <!-- <v-btn icon color="#e59e06">
                                    <v-icon>mdi-pencil mdi-24px</v-icon>
                                </v-btn>
            
                                <v-btn icon color="#607D8B">
                                    <v-icon>mdi-account-switch mdi-24px</v-icon>
                                </v-btn> -->
                            </td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                        <tr v-for="user in userStore.listUsers" :key="user.id">
                            <td md="2">

                                <v-btn class="btn-table" color="#e59e06" variant="text" icon> <v-icon>mdi-lead-pencil
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Editar</v-tooltip>
                                </v-btn>
                                <v-btn class="btn-table" color="#607D8B" variant="text" icon> <v-icon>mdi-buffer
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Detalle</v-tooltip>
                                </v-btn>

                                <!-- <v-btn icon color="#e59e06">
                                    <v-icon>mdi-pencil mdi-24px</v-icon>
                                </v-btn>
            
                                <v-btn icon color="#607D8B">
                                    <v-icon>mdi-account-switch mdi-24px</v-icon>
                                </v-btn> -->
                            </td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                        <tr v-for="user in userStore.listUsers" :key="user.id">
                            <td md="2">

                                <v-btn class="btn-table" color="#e59e06" variant="text" icon> <v-icon>mdi-lead-pencil
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Editar</v-tooltip>
                                </v-btn>
                                <v-btn class="btn-table" color="#607D8B" variant="text" icon> <v-icon>mdi-buffer
                                        mdi-18px</v-icon>
                                    <v-tooltip activator="parent" location="start">Detalle</v-tooltip>
                                </v-btn>

                                <!-- <v-btn icon color="#e59e06">
                                    <v-icon>mdi-pencil mdi-24px</v-icon>
                                </v-btn>
            
                                <v-btn icon color="#607D8B">
                                    <v-icon>mdi-account-switch mdi-24px</v-icon>
                                </v-btn> -->
                            </td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                    </tbody>

                </v-table>
            </v-card-text>
            <!-- Code begins here -->
            <a href="#" class="float">
                <i class="fa fa-plus my-float"></i>
            </a>

            <!--     <v-btn color="#607D8B" absolute top right fab icon> <v-icon>mdi-plus-box mdi-24px</v-icon>
                <v-tooltip activator="parent" location="end">Nuevo Registro</v-tooltip>
            </v-btn> -->
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/userStore';
const userStore = useUserStore();
userStore.user.name = 'LUIS'

userStore.getUsers();
</script> 

<style>
table td:nth-child(1) {
    width: 110px;
}

.btn-table {
    width: calc(var(--v-btn-height) + 1px) !important;
    height: calc(var(--v-btn-height) + 1px) !important;
}

.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #0C9;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.my-float {
    margin-top: 22px;
}
</style>