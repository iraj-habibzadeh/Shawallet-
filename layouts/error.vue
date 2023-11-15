<template>
    <div>
        <h1>PAGE NOT FOUND</h1>
    </div>
</template>
   
<script>
export default {
    path: '*',
    name: 'Error',
    // component: () => import('@/pages/Error') (Optional)
    meta: {
        layout: 'error' // name of the layout
    }
}
</script>
   
<style>
/* your style */
</style>