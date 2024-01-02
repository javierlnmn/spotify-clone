<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = '';
    if (currentHour < 12 ) {
        greeting = 'Good morning!';
    } else if (currentHour < 18 ) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
</script>

<h3 class="font-bold text-4xl">{greeting}</h3>