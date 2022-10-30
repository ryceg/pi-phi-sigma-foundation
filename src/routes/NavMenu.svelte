<script lang='ts'>
    let outerWidth: number
    $: outerWidth
</script>
<svelte:window bind:outerWidth={outerWidth}></svelte:window>
<span class='relative'>
    {#if outerWidth >= 1024}
    <nav class="list-nav card p-4 w-64 shadow-xl" data-menu="navigation-menu">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">The Team</a></li>
            <li><a href="/chapters">Chapters</a></li>
            <li><a href="/philanthropy">Philanthropy</a></li>
            <li><a href="/donate">Donate</a></li>
        </ul>
    </nav>
    {:else}
    <nav class="list-nav p-4 w-100">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">The Team</a></li>
            <li><a href="/chapters">Chapters</a></li>
            <li><a href="/philanthropy">Philanthropy</a></li>
            <li><a href="/donate">Donate</a></li>
        </ul>
    </nav>
    {/if}
</span>