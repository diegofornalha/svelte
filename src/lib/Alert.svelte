<script lang="ts">
    import { state } from "../store";
</script>

{#if $state.alert}
    <div
        class={`bg-${$state.alert.color}-500 text-white px-6 py-4 border-0 rounded absolute right-0 mt-10 mr-10`}
    >
        <span class="text-xl inline-block mr-5 align-middle">
            <i class="fas fa-bell" />
        </span>
        <span class="inline-block align-middle font-semibold mr-8">
            {$state.alert.message}
        </span>
        <button 
            class="close-button"
            tabindex="0"
            on:click={() => state.alert(null)}
            on:keydown={(e) => e.key === 'Enter' && state.alert(null)}
        >
            ×
        </button>
    </div>
{/if}

<style>
    .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2em;
        color: inherit; 
        padding: 0; 
        outline: none; 
    }

    .close-button:focus {
       
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    }
</style>
