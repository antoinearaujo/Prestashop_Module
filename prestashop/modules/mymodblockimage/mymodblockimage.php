<?php

class MyModBlockImage extends Module
{
    public function __construct() //Informations sur le module
    {
        $this->name = 'mymodblockimage';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Block Image';
        $this->description = 'Module pour afficher un block avec une image';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();

        Configuration::updateValue('MMB_IMG', 1);


        $this->registerHook('displayHome');

        return true;
    }

    public function getContent() // Configuration du module (BackOffice)
    {
        $this->assignConfiguration();

        $html = $this->processConfiguration();
        $html .= $this->displayConfirmation($this->l('The settings have been updated.'));

        return $html . $this->renderForm();
    }

    public function renderForm() // Construction du formulaire (BackOffice)
    {
        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Settings'),
                    'icon' => 'icon-cogs'
                ),
                'input' => array(
                    array(
                        'type' => 'file',
                        'label' => $this->l('Autoriser l`affichage'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Autoriser l`affichage d`un message de bienvenue'),     //description on scroll
                        'desc' => $this->l(''),
                        'name' => 'MM_FILE',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            ),
                        ),
                    ),

                ),

                'submit' => array(
                    'title' => $this->l('Save'),
                )
            )
        );


        $helper = new HelperForm();
        $lang = new Language((int)Configuration::get('PS_LANG_DEFAULT'));
        $helper->default_form_language = $lang->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
        $helper->identifier = $this->identifier;
        $helper->submit_action = 'submit' . $this->name;
        $helper->currentIndex = $this->context->link->getAdminLink('AdminModules', false) . '&configure=' . $this->name . '&tab_module=' . $this->tab . '&module_name=' . $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->tpl_vars = array(
            'fields_value' => $this->getConfigFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id
        );

        return $helper->generateForm(array($fields_form));

    }

    public function getConfigFieldsValues() // Sauvegarder la valeur enregistrée dans la configuration du module
    {
        return array(
            'MM_FILE' => Tools::getValue('MM_FILE', Configuration::get('MM_FILE')),


        );
    }


    public function processConfiguration() // Recuperation des valeurs
    {

        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('MM_FILE'))) {
                Configuration::updateValue('MM_FILE', (file)(Tools::getValue('MM_FILE')));


            }
        }

    }

    public function assignConfiguration() // Assignation des variables
    {

        $file = Configuration::get('MM_FILE');


        $this->context->smarty->assign(array(
            'file' => $file,


        ));

    }

    public function hookDisplayNav($params) // Hook Pour placer le module au bon endroit
    {

        $this->assignConfiguration();
        return $this->display(__FILE__, 'displayHome.tpl');
    }

    public function hookDisplayTop($params)
    {
        return $this->hookDisplayNav($params);
    }

    public function hookDisplayLeftColumn($params)
    {
        return $this->hookDisplayNav($params);
    }

}