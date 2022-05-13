<script lang='ts'>
  import ToolsPanel from '@/components/ToolsPanel.svelte'
  import { dataGroups, KeyInfo } from '@/stores/data'

  let unameInput: HTMLInputElement | null = null

  type SelectedData = {
    group: string
    row: number
    col: number
  }

  let selectedData: SelectedData | null = null

  $: selectedKey = selectedData ? $dataGroups[selectedData.group][selectedData.row].row[selectedData.col] : null

  const setSelected = (group: string, row: number, col: number) => {
    selectedData = {
      group, row, col
    }
  }

  const editKeyUp = (e: KeyboardEvent, key: KeyInfo) => {
    console.log(e)
    if (e.code == 'KeyQ' && e.ctrlKey && unameInput) {
      unameInput.focus()
      unameInput.select()
    }

    if (e.code == 'ArrowLeft') {
      if (key.width) key.width--
      else key.width = -1
    }
    if (e.code == 'ArrowRight') {
      if (key.width) key.width++
      else key.width = 1
    }
    if (e.code == 'ArrowUp') {
      if (key.height) key.height--
      else key.height = -1
    }
    if (e.code == 'ArrowDown') {
      if (key.height) key.height++
      else key.height = 1
    }
    $dataGroups = $dataGroups
  }
</script>

<div class="select-none container mx-auto h-full py-8 flex flex-col children:mb-8">
  <div class="grid grid-cols-5 gap-2 h-full">
    <ToolsPanel/>
    <div class="col-span-4 h-full overflow-hidden w-full h-full bg-gray-800 rounded p-2 flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <div class="text-lg font-light w-full">
          selected: {selectedData ? `${selectedKey?.name} @ w: ${selectedKey?.width} @ h: ${selectedKey?.height}` : 'none'}
        </div>
        {#if selectedData}
          <input bind:this={unameInput} type="text" bind:value={$dataGroups[selectedData.group][selectedData.row].row[selectedData.col].name} class="w-full">
        {/if}
      </div>
      <div class="overflow-auto flex flex-col gap-2">
        {#each Object.keys($dataGroups) as group}
          <div class="border-1 border-gray-700 rounded p-2 flex flex-col gap-4px">
            {#each $dataGroups[group] as row, i}
              <div class="flex gap-4px overflow-visible" style="height: {16*2}px">
                {#each row.row as col, j}
                  <button on:keyup={e => editKeyUp(e, col)} on:click={e => setSelected(group, i, j)} style="width: {(16+(col.width || 0)) * 2}px; height: {(16+(col.height || 0)) * 2}px">
                    {col.name}
                  </button>
                {/each}
              {row.row.reduce((p, c) => p + 16 + (c.width || 0), 0) + (row.row.length - 1) * 2}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang='postcss'>
	/* customize scrollbar css */
	::-webkit-scrollbar{
		@apply w-2;
	}
	::-webkit-scrollbar:horizontal{
		@apply h-2;
	}
	::-webkit-scrollbar-track{
    @apply bg-gray-900 rounded bg-opacity-50;
	}
	::-webkit-scrollbar-thumb{
		@apply bg-gray-700 rounded bg-opacity-50;
	}
	::-webkit-scrollbar-thumb:hover{
		@apply bg-opacity-100;
	}
	::-webkit-scrollbar-thumb:active{
		@apply bg-gray-600;
	}
</style>