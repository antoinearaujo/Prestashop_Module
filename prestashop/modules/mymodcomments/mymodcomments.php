<?php

class MyModComments extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'mymodcomments';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Mon module de commentaire produit';
        $this->description = 'Avec ce module, mes clients pourront commenter les produits';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();
        $this->processConfiguration();
        return $this->display(__FILE__, 'getContent.tpl');
    }

    public function processConfiguration() // Recuperation des valeurs
    {
        if (Tools::isSubmit('submit_mymodcomments_form')) {
            $enable_grades = Tools::getValue('enable_grades');
            $enable_comments = Tools::getValue('enable_comments');
            Configuration::updateValue('MYMOD_GRADES', $enable_grades);
            Configuration::updateValues('MYMOD_COMMENTS', $enable_comments);
            $this->context->smarty->assign('confirmation', 'Les modifications sont enregistrées'); // Message de confirmation

        }
    }


    public function assignConfiguration() // Assignation des variables
    {

        $enable_grades = Configuration::get('MYMOD_GRADES');
        $enable_comments = Configuration::get('MYMOD_COMMENTS');
        $this->context->smarty->assign('enable_grades', $enable_grades);
        $this->context->smarty->assign('enable_comments', $enable_comments);

    }

}