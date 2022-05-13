<script lang='ts'>
  import YAML from 'yaml'
  import Icon from '@iconify/svelte'
  import { dataGroups, dataMeta, dataGroupHistory, MAX_HISTORY } from '@/stores/data'
  import { push } from 'svelte-spa-router'

  const addHistory = () => {
    $dataGroupHistory.push(JSON.parse(JSON.stringify(dataGroups)))
    while ($dataGroupHistory.length > MAX_HISTORY) {
      $dataGroupHistory.shift()
    }
  }

  type AppAction = {
    icon: string
    label: string
    action: () => void
  }

  const saveAction = () => {
    console.log('Save')
    localStorage.setItem('keymap', JSON.stringify($dataGroups))
    localStorage.setItem('keymapMeta', JSON.stringify($dataMeta))
  }

  const loadAction = () => {
    console.log('Load')
    addHistory()
    $dataGroups = JSON.parse(localStorage.getItem('keymap') || 'null') || $dataGroups
    $dataMeta = JSON.parse(localStorage.getItem('keymapMeta') || 'null') || $dataMeta
  }

  const exportAction = () => {
    // const dg: any = {}
    // Object.keys($dataGroups).forEach(group => {
    //   dg[group] = $dataGroups[group].map(_row => { return { row: _row.map(col => { return { ...col, name: col.name.toUpperCase() }}) }})
    // })
    const ddg: any = {
      meta: $dataMeta,
      keys: $dataGroups
    }
    console.log(ddg)
    const data = YAML.stringify(ddg)
    const blob = new Blob([ data ], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${$dataMeta.code}.yaml`
    a.click()
    URL.revokeObjectURL(url)
  }

  const undoDataGroupChange = () => {
    if ($dataGroupHistory.length > 0) {
      const v = $dataGroupHistory.pop()
      if (v) {
        console.log(v)
        $dataGroups = v
        $dataGroups = $dataGroups
      }
    }
  }

  const importAction = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.yaml'
    input.addEventListener('change', (e: any) => {
      const file = e.currentTarget.files[0]
      const reader = new FileReader()
      reader.onload = (e: any) => {
        addHistory()
        const data = YAML.parse(e.target.result)
        console.log(data)
        $dataGroups = data.keys
        $dataGroups = $dataGroups
        $dataMeta = data.meta
      }
      reader.readAsText(file)
    })
    input.click()
  }

  const appActions: AppAction[] = [
    {
      icon: 'carbon:save',
      label: 'Save',
      action: saveAction
    },
    {
      icon: 'carbon:document',
      label: 'Load',
      action: loadAction
    },
    {
      icon: 'carbon:document-export',
      label: 'Export',
      action: exportAction
    },
    {
      icon: 'carbon:document-import',
      label: 'Import',
      action: importAction
    },
    {
      icon: 'carbon:keyboard',
      label: 'Keyboard Keys',
      action: () => {
        push('/')
      }
    },
    {
      icon: 'carbon:keyboard',
      label: 'Keyboard Layout',
      action: () => {
        push('/size')
      }
    }
  ]
</script>

<svelte:window on:keydown={e => {
  if (e.code == 'KeyZ' && e.ctrlKey) {
    console.log('Undo!', $dataGroupHistory.length)
    e.preventDefault()
    undoDataGroupChange()
    return
  }
  if (e.code == 'KeyS' && e.ctrlKey) {
    e.preventDefault()
    saveAction()
  }
}} />

<div class="bg-gray-800 rounded px-4 py-2 flex flex-col gap-2 overflow-hidden">
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <div class="font-light">
        Tools
      </div>
    </div>
    <div class="w-full h-1px bg-gray-700"></div>
    <input class="w-full" type="text" bind:value={$dataMeta.name}>
    <input class="w-full" type="text" bind:value={$dataMeta.code}>
    {#each appActions as appAction}
    <div on:click={appAction.action} class="px-2 py-1 rounded hover:bg-gray-700 flex items-center cursor-pointer">
      <Icon icon={appAction.icon} class="w-6 h-5" inline />
      <span class="ml-2">{appAction.label}</span>
    </div>
    {/each}
  </div>
</div>