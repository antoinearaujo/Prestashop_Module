{if $enable_bool}
    {if $enable_maj == 0}
        {if $enable_pol == 1}
            {if $enable_ali == 1}
                <h1 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h1>
            {elseif $enable_ali == 2}
                <h1 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h1>
            {elseif $enable_ali == 3}
                <h1 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h1>
            {/if}
        {elseif $enable_pol == 2}
            {if $enable_ali == 1}
                <h3 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h3>
            {elseif $enable_ali == 2}
                <h3 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h3>
            {elseif $enable_ali == 3}
                <h3 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h3>
            {/if}
        {elseif $enable_pol == 3}
            {if $enable_ali == 1}
                <h5 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h5>
            {elseif $enable_ali == 2}
                <h5 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};">{$enable_msg}</h5>
            {elseif $enable_ali == 3}
                <h5 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty}">{$enable_msg}</h5>
            {/if}
        {/if}
    {/if}
    {if $enable_maj == 1 }
        {if $enable_pol == 1}
            {if $enable_ali == 1}
                <h1 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h1>
            {elseif $enable_ali == 2}
                <h1 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h1>
            {elseif $enable_ali == 3}
                <h1 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h1>
            {/if}
        {elseif $enable_pol == 2}
            {if $enable_ali == 1}
                <h3 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h3>
            {elseif $enable_ali == 2}
                <h3 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h3>
            {elseif $enable_ali == 3}
                <h3 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h3>
            {/if}
        {elseif $enable_pol == 3}
            {if $enable_ali == 1}
                <h5 style="text-align: right; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h5>
            {elseif $enable_ali == 2}
                <h5 style="text-align: center; color: {$enable_col}; font-family: {$enable_sty};text-transform: uppercase;">{$enable_msg}</h5>
            {elseif $enable_ali == 3}
                <h5 style="text-align: left; color: {$enable_col}; font-family: {$enable_sty}text-transform: uppercase;">{$enable_msg}</h5>
            {/if}
        {/if}
    {/if}
{/if}
