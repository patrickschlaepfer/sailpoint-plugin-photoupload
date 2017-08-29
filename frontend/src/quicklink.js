var urlLink = SailPoint.CONTEXT_PATH + '/plugins/pluginPage.jsf?pn=PhotoUploadPlugin#/';

jQuery(document).ready(function(){
    jQuery("#quickLinkCategoryAccess_list ul.nav li:first")
        .before(
            '<li role="presentation">' +
            '                  <a href="' + urlLink + '" tabindex="0" role="listitem" class="menuitem">' +
            '                      Photo Upload' +
            '                  </a>' +
            '</li>'
        );
});
 