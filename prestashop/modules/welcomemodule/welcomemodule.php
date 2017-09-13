<?php

class WelcomeModule extends Module
{

    public function __construct() //Informations sur le module
    {
        $this->name = 'welcomemodule';
        $this->tab = 'front_office_features';
        $this->version = '0.0.1';
        $this->author = 'Antoine Araujo';
        $this->displayName = 'Module de bienvenue';
        $this->description = 'Avec ce module, mes clients pourront choisir un message de bienvenue';
        $this->bootstrap = true;


        parent:: __construct();

    }

    public function install() // Installation et amorçage du Hook
    {
        parent::install();

        // Activate every option by default
        Configuration::updateValue('WM_MOD_BOOL', 1);
        Configuration::updateValue('WM_MOD_MSG', 'Entrez votre message ici');
        Configuration::updateValue('WM_MOD_POL', 1);


        $this->registerHook('displayNav');
        $this->registerHook('displayTop');
        $this->registerHook('displayLeftColumn');


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
                        'type' => 'switch',
                        'label' => $this->l('Bienvenue'),
                        'desc' => $this->l(''),     // description
                        'hint' => $this->l('Autoriser l`affichage d`un message de bienvenue'),     //description on scroll
                        'desc' => $this->l(''),
                        'name' => 'WM_MOD_BOOL',
                        'required' => true,
                        'values' => array(
                            array(
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        )
                    ),
                    array(
                        'type' => 'select',                              // This is a <select> tag.
                        'label' => $this->l('Taille de la police'),  // A help text, displayed right next to the <select> tag.
                        'name' => 'WM_MOD_POL',                     // The content of the 'id' attribute of the <select> tag.
                        'required' => true,
                        // If set to true, this option must be set.
                        'options' => array(
                            'query' => array(
                                array(
                                    'id_option' => 1,       // The value of the 'value' attribute of the <option> tag.
                                    'name' => 'Grosse Police'   // The value of the text content of the  <option> tag.
                                ),
                                array(
                                    'id_option' => 2,
                                    'name' => 'Moyenne Police'
                                ),
                                array(
                                    'id_option' => 3,
                                    'name' => 'Petite Police'
                                ),
                            ),
                            'id' => 'id_option',                           // The value of the 'id' key must be the same as the key for 'value' attribute of the <option> tag in each $options sub-array.
                            'name' => 'name'                               // The value of the 'name' key must be the same as the key for the text content of the <option> tag in each $options sub-array.
                        )
                    ),

                    array(
                        'type' => 'textarea',
                        'label' => $this->l('Message'),
                        'name' => 'WM_MOD_MSG',
                        'class' => 'lg',
                        'required' => true,
                        'desc' => $this->l('Entrez un message de bienvenue'),
                    )

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
            'WM_MOD_BOOL' => Tools::getValue('WM_MOD_BOOL', Configuration::get('WM_MOD_BOOL')),
            'WM_MOD_MSG' => Tools::getValue('WM_MOD_MSG', Configuration::get('WM_MOD_MSG')),
            'WM_MOD_POL' => Tools::getValue('WM_MOD_POL', Configuration::get('WM_MOD_POL')),


        );
    }


    public function processConfiguration() // Recuperation des valeurs
    {

        if (Tools::isSubmit('submit' . $this->name)) {
            if (Validate::isUnsignedInt(Tools::getValue('WM_MOD_BOOL')) && Validate::isMessage(Tools::getValue('WM_MOD_MSG'))) {
                Configuration::updateValue('WM_MOD_BOOL', (int)(Tools::getValue('WM_MOD_BOOL')));
                Configuration::updateValue('WM_MOD_MSG', (string)(Tools::getValue('WM_MOD_MSG')));
                Configuration::updateValue('WM_MOD_POL', (string)(Tools::getValue('WM_MOD_POL')));


            }
        }

    }

    public function assignConfiguration() // Assignation des variables
    {

        $enable_bool = (bool)Configuration::get('WM_MOD_BOOL');
        $enable_msg = (string)Configuration::get('WM_MOD_MSG');
        $enable_pol = (int)Configuration::get('WM_MOD_POL');

        $this->context->smarty->assign(array(
            'enable_bool' => $enable_bool,
            'enable_msg' => $enable_msg,
            'enable_pol' => $enable_pol,


        ));

    }

    public function hookDisplayNav($params) // Hook Pour placer le module au bon endroit
    {

        $this->assignConfiguration();
        return $this->display(__FILE__, 'displayNav.tpl');
    }

    public function hookDisplayTop($params)
    {
        return $this->hookDisplayNav($params);
    }

    public function hookDisplayLeftColumn($params)
    {
        return $this->hookDisplayNav($params);
    }


    /*public function assignProductTabContent() // Assignation des valeurs a des variables
    {
        $enable_bool = Configuration::get('WM_MOD_BOOL');
        $enable_msg = Configuration::get('WM_MOD_MSG');

        $this->context->smarty->assign(array(
                'enable_bool' => $enable_bool,
                'enable_msg' => $enable_msg)
        );


    }*/

}