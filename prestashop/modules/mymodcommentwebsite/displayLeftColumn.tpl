{if $enable_comments || $enable_grades} {* si comments est a true (commentaires) *}
    <div id="categories_block_left" class="block">
        <h3 class="well">Avis sur le site :</h3>
    </div>
{/if}

{if $enable_grades}
<!-- Trigger the modal with a button -->
<button type="button" class="btn-danger" data-toggle="modal" data-target="#myModal">Voir les avis</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Moyenne des avis</h4>
            </div>
            <div class="modal-body">


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
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                </br></br>
            </div>
        </div>
    </div>
</div>


<!-- Trigger the modal with a button -->
<button type="button" class="btn-danger" data-toggle="modal" data-target="#myModal2">Donner son avis</button>

<!-- Modal -->
<div id="myModal2" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Je donne mon avis</h4>
            </div>
            <div class="modal-body">


                {if $enable_comments} {* si comments est a true (commentaires) *}
                {if $enable_maj == 1} {* si enable_maj est a true (majuscule) *}
                <h5 class="page-product-heading" style="text-transform: uppercase;">
                    {elseif $enable_maj == 0}
                    <h5 class="page-product-heading">
                        {/if}
                        <form action="" method="POST" id="comment-form">
                            <div class="form-group">
                                <label for="grade">
                                    <h{$enable_pol} style="color: {$enable_col}; font-family: {$enable_sty};">Note:
                                    </h{$enable_pol}>
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
                                    <h{$enable_pol} style="color: {$enable_col}; font-family: {$enable_sty};">
                                        Commentaire :
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
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
            </div>
        </div>

    </div>
</div>





