<script lang='ts'>
  let count = 0

  const click = () => {
    count += 1
  }
</script>

<div class="container mx-auto py-8 flex flex-col children:mb-8">
  <div on:click={click} class="select-none border-1 border-gray-300 cursor-pointer hover:border-gray-400 hover:bg-gray-100 active:bg-gray-200 rounded-full px-4 py-2 inline-block mx-auto">
    Click to count: {count}
  </div>
</div>