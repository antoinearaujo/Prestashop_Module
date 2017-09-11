<h3 class="page-product-heading">
    Commentaires sur ce produit
</h3>
<div class="rte">
    {foreach from=$comments item=comment}
        <div class="well">
            <h4> {$comment.comment}</h4>
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
<h3 class="page-product-heading">
    Je veux ajouter un commentaire !</br></br>
    <form action="" method="POST" id="comment-form">
        <div class="form-group">
            <label for="grade">Note:</label>
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
            <label for="comment">Commentaire : </label>
            <textarea name="comment" id="comment" class="form-control"></textarea>
        </div>
        <div class="submit">
            <button type="submit" name="mymod_pc_submit_comment" class="button btw btn-default button-medium">
                <span>Envoyer
                <i class="icon-chevron-right right"></i>
                </span>
            </button>
        </div>
    </form>
</h3>
