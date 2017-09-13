{if $enable_bool}
    </br>
    {if $enable_pol == 1}
        <h1 style="text-align: center; color: deepskyblue; font-family: Cursive">{$enable_msg}</h1>
    {elseif $enable_pol == 2}
        <h3 style="text-align: center; color: deepskyblue; font-family: Cursive">{$enable_msg}</h3>
    {elseif $enable_pol == 3}
        <h5 style="text-align: center; color: deepskyblue; font-family: Cursive">{$enable_msg}</h5>
    {/if}

{/if}
