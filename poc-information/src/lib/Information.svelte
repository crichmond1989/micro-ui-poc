<svelte:options customElement={{ tag: "poc-information", shadow: "none" }} />

<script lang="ts">
  export let name: string;
</script>

<main>
  <h2>Information</h2>
  <p>
    I'm not really sure what to demonstrate regarding Svelte mUI components. I
    thought about another prop-focused flow, similar to Inbox. I'll keep this
    one simpler. I'm going to demonstrate showing a logged in status.
  </p>
  <p>
    Status: {name ? "🟢 Logged In" : "🔴 Anonymous"}
  </p>
</main>
