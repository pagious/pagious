<template>
    <header>
        <div style="position: absolute; top: 0; right: 0;">
            <div style="height: 20px; width: 100px; background-color: #cc0000; color: white; text-align: center;">
                {{ where }}
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                where: process.static ? 'static' : (process.server ? 'server' : 'client')
            }
        }
    }
</script>
