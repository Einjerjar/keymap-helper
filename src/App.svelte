<script lang='ts'>
  import { routes, SimpleUserData } from '@/routes'
  import { routeState } from '@/stores/routeLoading'
  import { location, RouteLoadedEvent, RouteLoadingEvent } from 'svelte-spa-router'

  import Router from 'svelte-spa-router'
  import Navbar from '@/components/Navbar.svelte'
  import Footer from '@/components/Footer.svelte'
  import { APP_NAME } from '@/config'
  import { dataGroups, dataMeta } from '@/stores/data'

  $: currentData = routes[$location]?.userData as {title: string}
  $: currentPage = currentData.title || 'NONE'

  let routeStateTimer: any = null
  const routeLoading = async (e: RouteLoadingEvent) => {
    const data = e.detail.userData as SimpleUserData
    $routeState = 1
  }
  const routeLoaded = async (e: RouteLoadedEvent) => {
    $routeState = 2

    if (routeStateTimer) clearTimeout(routeStateTimer)
    routeStateTimer = setTimeout(() => {
      $routeState = 0
    }, 500)
  }

  $: currentLocation = $location in routes ? routes[$location] : null
  $: routeTitle = currentLocation?.userData?.title
    ? `${currentLocation?.userData?.title} | ${APP_NAME}`
    : APP_NAME


  $dataGroups = JSON.parse(localStorage.getItem('keymap') || 'null') || $dataGroups
  $dataMeta = JSON.parse(localStorage.getItem('keymapMeta') || 'null') || $dataMeta
</script>

<svelte:head>
  <title>{routeTitle}</title>
</svelte:head>

<main class="flex flex-col absolute inset-0">
  <Navbar />
  <div class="py-2 flex-grow overflow-hidden">
    <Router
      on:routeLoading={routeLoading}
      on:routeLoaded={routeLoaded}
      {routes} />
  </div>
</main>

<style>
</style>
