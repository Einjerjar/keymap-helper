<script lang='ts'>
  import { routes } from '@/routes'
  import { location } from 'svelte-spa-router'
  import { routeState } from '@/stores/routeLoading'
  import { APP_NAME } from '@/config'
</script>

<div class="w-full relative h-16 min-h-16 shadow">
  <div class="container h-full mx-auto flex items-center">
    <div class="text-2xl font-light">
      {APP_NAME}
    </div>
  </div>
  <div class="absolute h-1 transition transition-all duration-200 bg-green-500 top-0 left-0 {$routeState == 1 ? 'w-1/8 opacity-100' : $routeState == 2 ? 'w-full opacity-100' : 'opacity-0'}"></div>
</div>