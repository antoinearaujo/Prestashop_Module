<img id="back" src="img/etoiles-back.png"/>
<img id="etoile" src="img/etoiles.png" style="clip: rect(0px, {$grade_general.moyAvis}px, 60px, 0px);"/>

</br>
</br>

<br>
{if $grade_general.nbAvis == 1}
    {$grade_general.nbAvis} personne a donné son avis
{else}
    {$grade_general.nbAvis} personnes ont donné leurs avis
{/if}
</br>
</br>

<strong>Dernier Commentaire :</strong></br>
{$last_comment.comment}
</br>
</br>


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