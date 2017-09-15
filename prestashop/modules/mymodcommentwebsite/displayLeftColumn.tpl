{if $enable_comments || $enable_grades} {* si comments est a true (commentaires) *}
    <div id="categories_block_left" class="block">
        <h3 class="well">Avis sur le site :</h3>
    </div>
{/if}

{if $enable_grades} {* si comments est a true (commentaires) *}
    <img id="back" src="img/etoiles-back.png"/>
    <img id="etoile" src="img/etoiles.png" style="clip: rect(0px, {$grade_general.moyAvis}px, 60px, 0px);"/>
    <h5>
        {if $grade_general.nbAvis == 1}
            {$grade_general.nbAvis} personne a donné son avis
        {else}
            {$grade_general.nbAvis} personnes ont donné leurs avis
        {/if}
    </h5>
{/if}


</br>
</br>


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


    <style>
        #etoile {
            position: absolute;
            width: 50px;
            height: 50px;

        }

        #back {
            position: absolute;
            width: 50px;
            height: 50px;
        }
    </style>