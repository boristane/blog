<template>
    <div class="header">
        <a href="/">BORIS TANE</a>
        <p class="links">
            <a href="https://boristane.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe-africa"></i></a>
            <a href="https://boristane.com/views/lab.html" target="_blank" rel="noopener noreferrer"><i class="fas fa-flask"></i></a>
            <a href="https://art.boristane.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-palette"></i></a>
            <a href="https://boristane.com/views/projects.html" target="_blank" rel="noopener noreferrer"><i class="fas fa-suitcase"></i></a>  
        </p>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
    text-align: center;
    margin: 50px auto 15px;
    font-weight: 400;
    letter-spacing: 5px;
}

.header a {
    font-size: 15px;
    text-decoration: none;
}

.header a:link {
    padding: 5px;
    color: lightgrey;
    transition: color 0.2s ease-in-out;
}

.header a:visited {
    color: lightgrey;
}

.header a:active {
    color: lightgrey;
}

.header a:hover,
.links a:hover {
    color: rgb(253, 101, 101);
}

@media screen and (max-width: 420px) {
    .header {
        margin-top: 20px;
    }
}
</style>

