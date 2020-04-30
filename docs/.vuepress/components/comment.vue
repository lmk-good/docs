<template>
 <div id="vcomments"></div>
</template>
 
<script>
export default {
 name: 'Valine',
 mounted: function(){
  // require window 
  const Valine = require('valine');
  if (typeof window !== 'undefined') {
   this.window = window
   window.AV = require('leancloud-storage')
    
  }
 
  new Valine({
   el: '#vcomments' ,
   appId: 'zFXhS67KHRvF0TEDc0IDo0pM-gzGzoHsz',// your appId
   appKey: '4fkGUscEMvJX7L0uWRVPar8x', // your appKey
   notify:false, 
   verify:false, 
   avatar:'mm', 
   placeholder: 'just go go'
  });
 },
}
</script>