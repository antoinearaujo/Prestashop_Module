
<h3 class="page-product-heading">
    Avis sur ce produit
</h3>

<div class="rte">
    {foreach from=$comments item=comment}
        <div class="well">
            <div class="jumbotron">
                <h4><strong>{$comment.comment}</strong></h4>
            </div>

            <br>
            {if {$comment.grade} eq '1'}
                <img src="img/etoile.png" alt=""/>
            {/if}
            {if {$comment.grade} eq '2'}
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
            {/if}
            {if {$comment.grade} eq '3'}
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
            {/if}
            {if {$comment.grade} eq '4'}
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
            {/if}
            {if {$comment.grade} eq '5'}
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
                <img src="img/etoile.png" alt=""/>
            {/if}
        </div>
    {/foreach}
</div>

</h3>
