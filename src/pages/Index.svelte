<script lang='ts'>
  import { keyMap } from '@/lib/keymap'
  import Icon from '@iconify/svelte'
  import { dataMeta, dataGroups, dataGroupHistory, MAX_HISTORY, KeyInfo } from '@/stores/data'
  import ToolsPanel from '@/components/ToolsPanel.svelte'

  const visRow: {[key: string]: boolean} = {}
  const visCol: {[key: string]: boolean} = {}

  const addHistory = () => {
    $dataGroupHistory.push(JSON.parse(JSON.stringify(dataGroups)))
    while ($dataGroupHistory.length > MAX_HISTORY) {
      $dataGroupHistory.shift()
    }
  }

  const addRow = (group: string) => {
    if (group in $dataGroups) {
      addHistory()
      $dataGroups[group].push({ row: [] })
      $dataGroups[group] = $dataGroups[group]
    }
  }

  const addKey = (group: string, row: number) => {
    if (group in $dataGroups && row in $dataGroups[group]) {
      addHistory()
      $dataGroups[group][row].row.push({
        name: '',
        code: 0,
      })
      $dataGroups[group] = $dataGroups[group]
    }
  }

  const deleteKey = (group: string, row: number, key: number) => {
    if (group in $dataGroups && row in $dataGroups[group] && $dataGroups[group][row].row.length > key) {
      addHistory()
      $dataGroups[group][row].row.splice(key, 1)
      $dataGroups[group] = $dataGroups[group]
    }
  }

  const deleteRow = (group: string, row: number) => {
    if (group in $dataGroups && row in $dataGroups[group]) {
      addHistory()
      $dataGroups[group].splice(row, 1)
      $dataGroups[group] = $dataGroups[group]
    }
  }

  const numValidate = (e: Event & {currentTarget: EventTarget & HTMLInputElement}, v: KeyInfo, k: 'width'|'height'|'code') => {
    console.log('blur', v, k, !e.currentTarget.value || e.currentTarget.value == undefined || e.currentTarget.value == null || e.currentTarget.value == '')
    if (!e.currentTarget.value || e.currentTarget.value == undefined || e.currentTarget.value == null || e.currentTarget.value == '') {
      addHistory()
      v[k] = 0
      $dataGroups = $dataGroups
    }
  }

  const getKey = (e: KeyboardEvent, group: string, row: number, col: number) => {
    e.preventDefault()
    console.log(e.code, e.key, keyMap[e.code || e.key])
    if (group in $dataGroups && row in $dataGroups[group] && col in $dataGroups[group][row].row) {
      addHistory()
      $dataGroups[group][row].row[col].code = keyMap[e.code || e.key]
      $dataGroups[group] = $dataGroups[group]
    }
  }

  const toggleColVis = (group: string, row: number, col: number) => {
    if (group in $dataGroups && row in $dataGroups[group] && col in $dataGroups[group][row].row) {
      // addHistory()
      visCol[`${group}-${row}-${col}`] = !visCol[`${group}-${row}-${col}`]
    }
  }

  const toggleRowVis = (group: string, row: number) => {
    if (group in $dataGroups && row in $dataGroups[group]) {
      // addHistory()
      visRow[`${group}-${row}`] = !visRow[`${group}-${row}`]
    }
  }

  const shiftItem = (group: string, row: number, col: number, count: number) => {
    if (group in $dataGroups && row in $dataGroups[group] && col < $dataGroups[group][row].row.length && col >= 0 && col + count < $dataGroups[group][row].row.length) {
      addHistory()
      const arr = $dataGroups[group][row].row[col]
      const arr2 = $dataGroups[group][row].row[col + count]
      $dataGroups[group][row].row[col] = arr2
      $dataGroups[group][row].row[col + count] = arr
    }
  }
</script>

<div class="select-none container mx-auto h-full py-8 flex flex-col children:mb-8">
  <div class="grid grid-cols-5 gap-2 h-full">
    <ToolsPanel />
    {#each Object.keys($dataGroups) as group}
      <div class="w-full h-full bg-gray-800 rounded px-4 py-2 flex flex-col gap-2 overflow-hidden">
        <div class="flex justify-between items-center">
          <div class="font-light">
            {group}
          </div>
          <div class="text-xl">
            <div on:click={() => addRow(group)} class="btn">
              <Icon icon='carbon:add' inline />
            </div>
          </div>
        </div>
        <div class="w-full h-1px bg-gray-700"></div>
        <div class="overflow-auto px-2 flex flex-col gap-2">
          {#each $dataGroups[group] as rows, i}
            <div class="flex flex-col gap-1">
              <div class="flex items-center justify-between">
                <div tabindex="0" on:keyup={e => {if (e.code=='Enter') toggleRowVis(group, i)}} on:click={e => toggleRowVis(group, i)} class="font-light pl-1 pr-3 cursor-pointer py-1 hover:bg-gray-700 rounded">
                  <Icon icon='{visRow[`${group}-${i}`] ? "carbon:caret-down" : "carbon:caret-right"}' inline />
                  {i}
                </div>
                <div class="text-xl flex">
                  <button on:click={() => addKey(group, i)}>
                    <Icon icon='carbon:add' inline />
                  </button>
                  <button on:click={() => deleteRow(group, i)} class="ml-2">
                    <Icon icon='carbon:trash-can' inline />
                  </button>
                </div>
              </div>
              {#if `${group}-${i}` in visRow && visRow[`${group}-${i}`]}
                {#each rows.row as col, j}
                  <div class="ml-2 flex items-center">
                    <div on:click={() => toggleColVis(group, i, j)} class="cursor-pointer hover:bg-gray-700 px-1 af rounded mr-1">
                      <Icon icon='{visCol[`${group}-${i}-${j}`] ? "carbon:caret-down" : "carbon:caret-right"}' inline />
                    </div>
                    <input class="flex-grow uppercase" type="text" bind:value={col.name}>
                    <div class="w-8 text-center">{col.name}</div>
                    <div class="h-6 relative flex flex-col">
                      <button on:click={() => shiftItem(group, i, j, -1)} disabled={j==0} class='max-h-1/2 !rounded-b-none border-b-0 py-0 flex items-center justify-center'>
                        <Icon icon='carbon:caret-up' inline />
                      </button>
                      <button on:click={() => shiftItem(group, i, j, 1)} disabled={j==rows.row.length-1} class='max-h-1/2 !rounded-t-none py-0 flex items-center justify-center'>
                        <Icon icon='carbon:caret-down' inline />
                      </button>
                    </div>
                    <button on:click={() => deleteKey(group, i, j)} class="ml-2">
                      <Icon icon='carbon:trash-can' inline />
                    </button>
                  </div>
                  {#if `${group}-${i}-${j}` in visCol && visCol[`${group}-${i}-${j}`]}
                    <div class="ml-6 flex items-center">
                      <Icon icon='carbon:direction-right-02' inline />
                      <input on:blur={(e) => numValidate(e, col, 'code')} class="flex-grow" type="number" bind:value={col.code}>
                      <button on:keyup={e => getKey(e, group, i, j)} class="ml-2">
                        <Icon icon='carbon:circle-dash' inline />
                      </button>
                      <button on:click={() => col.code = 0} class="ml-2">
                        <Icon icon='carbon:trash-can' inline />
                      </button>
                    </div>
                    <div class="ml-6 flex items-center">
                      <Icon icon='carbon:direction-right-02' inline />
                      <input on:blur={(e) => numValidate(e, col, 'width')} class="flex-grow" type="number" bind:value={col.width}>
                    </div>
                    <div class="ml-6 flex items-center">
                      <Icon icon='carbon:direction-right-02' inline />
                      <input on:blur={(e) => numValidate(e, col, 'height')} class="flex-grow" type="number" bind:value={col.height}>
                    </div>
                  {/if}
                {/each}
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}
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