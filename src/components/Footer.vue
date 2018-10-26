<template>
    <div class="footer">
        <p class="links">
            <a href="mailto:me@boristane.com" target="_blank" rel="noopener noreferrer" class="social pointer"><i class="far fa-envelope"></i></a>
            <a href="https://twitter.com/BorisTane" target="_blank" rel="noopener noreferrer" class="social pointer"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/boristane/" target="_blank" rel="noopener noreferrer" class="social pointer"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/boristane" target="_blank" rel="noopener noreferrer" class="social pointer"><i class="fab fa-github"></i></a>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
    text-align: center;
    margin: 50px auto 15px;
    font-weight: 400;
}

.links a:link {
    padding: 5px;
    color: lightgrey;
}

.links a:visited {
    color: lightgrey;
}

.links a:active {
    color: lightgrey;
}

.links a:hover {
    color: rgb(253, 101, 101);
}
</style>

