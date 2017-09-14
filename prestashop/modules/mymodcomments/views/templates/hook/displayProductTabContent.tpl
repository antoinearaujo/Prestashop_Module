{if $enable_comments || $enable_grades} {* si au moins une des deux variables est a true *}
    <h3 class="page-product-heading">
        AVIS SUR CE PRODUIT
    </h3>
    <div class="rte">
        {foreach from=$comments key=i item=comment name=foo}
            {if $smarty.foreach.foo.index == {$enable_nbcom}} {* si le nombre de com choisi dans le backoffice est depasser*}
                {break} {* on stoppe la boucle *}
            {/if}
            <div class="well">
                <div class="jumbotron">
                    {if $enable_maj eq 1}
                        <h{$enable_pol}
                                style="font-family: {$enable_sty};color: {$enable_col};text-transform: uppercase;">
                            <strong>{$comment.comment}</strong>
                        </h{$enable_pol}>
                    {elseif $enable_maj eq 0}
                        <h{$enable_pol} style="font-family: {$enable_sty};color: {$enable_col}">
                            <strong>{$comment.comment}</strong>
                        </h{$enable_pol}>
                    {/if}

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
    {if $enable_comments} {* si comments est a true (commentaires) *}
        {if $enable_maj == 1} {* si enable_maj est a true (majuscule) *}
            <h5 class="page-product-heading" style="text-transform: uppercase;">
        {elseif $enable_maj == 0}
            <h5 class="page-product-heading">
        {/if}
        <strong>
            <h{$enable_pol} style="color: {$enable_col}; font-family: {$enable_sty};">
                Je donne mon avis :
            </h{$enable_pol}>
        </strong>
        </br></br>
        <form action="" method="POST" id="comment-form">
            <div class="form-group">
                <label for="grade">
                    <h{$enable_pol} style="color: {$enable_col}; font-family: {$enable_sty};">Note:</h{$enable_pol}>
                </label>
                <div class="row">
                    <div class="col-xs-4">
                        <select id="grade" class="form-control" name="grade">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="comment">
                    <h{$enable_pol} style="color: {$enable_col}; font-family: {$enable_sty};">Commentaire :
                    </h{$enable_pol}</label>
                <textarea name="comment" id="comment" class="form-control"></textarea>
            </div>
            <div class="submit">
                <button type="submit" name="mymod_pc_submit_comment"
                        class="button btw btn-default button-medium">
                <span>Envoyer
                <i class="icon-chevron-right right"></i>
                </span>
                </button>
            </div>
        </form>
        </h5>
    {/if}
{/if}