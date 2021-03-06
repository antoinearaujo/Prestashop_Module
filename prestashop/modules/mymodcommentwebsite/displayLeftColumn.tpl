{if $enable_comments || $enable_grades} {* si comments est a true (commentaires) *}
    <div id="categories_block_left" class="block">
        <h3 class="well">Avis sur le site :</h3>
    </div>
{/if}

<button data-toggle="collapse" data-target="#collapse1" class="btn-danger">Voir avis général</button>

<div id="collapse1" class="collapse">
    </br></br>

    {if $enable_grades}

        {if (int)$grade_general.moyAvis lte 50}
            <div class="progress">
                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                     aria-valuenow="{$grade_general.moyAvis}"
                     aria-valuemin="0" aria-valuemax="100" style="width:{$grade_general.moyAvis}%">
                    {(int)$grade_general.moyAvis}%
                </div>
            </div>
        {elseif (int)$grade_general.moyAvis lte 75}
            <div class="progress">
                <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
                     aria-valuenow="{$grade_general.moyAvis}"
                     aria-valuemin="0" aria-valuemax="100" style="width:{$grade_general.moyAvis}%">
                    {(int)$grade_general.moyAvis}%
                </div>
            </div>
        {elseif (int)$grade_general.moyAvis lte 100}
            <div class="progress">
                <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                     aria-valuenow="{$grade_general.moyAvis}"
                     aria-valuemin="0" aria-valuemax="100" style="width:{$grade_general.moyAvis}%">
                    {(int)$grade_general.moyAvis}%
                </div>
            </div>
        {/if}

        {* Personne qui ont donné leurs avis *}
        <h5 style="color: white;">
            {if $grade_general.nbAvis == 1}
                {$grade_general.nbAvis} personne a donné son avis
            {else}
                {$grade_general.nbAvis} personnes ont donné leurs avis
            {/if}
        </h5>
        <strong>Dernier commentaire : </strong>
        </br>
        Le {$last_comment.date|date_format} à ({$last_comment.date|date_format:'%H:%M'})</strong>
        </br></br>
        {$last_comment.comment}
        </h5>
        </br></br>

    {/if}
</div>


<button data-toggle="collapse" class="btn-danger" data-target="#demo">Ajouter un avis</button>

<div id="demo" class="collapse">


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
    {/if}</div>

</br></br>




