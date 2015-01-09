'use strict';
module.exports =

angular
  .module('quill-grammar.directives.grammarCMS', [
  ])
  .directive('grammarCmsCategoriesNew', require('./categories.new.js'))
  .directive('grammarCmsCategoriesList', require('./categories.list.js'))
  .directive('grammarCmsCategory', require('./category.show.js'))
  .directive('grammarCmsRule', require('./rule.show.js'))
  .directive('grammarCmsCategoryPanel', require('./category.edit.js').panel)
  .directive('grammarCmsRulePanel', require('./rule.edit.js').panel)
  .directive('grammarCmsRuleQuestion', require('./question.js').show)
  .directive('grammarCmsRuleQuestionPanel', require('./question.js').panel)
  .directive('grammarCmsModalDialog', require('./modal.js').modal)
  .directive('grammarCmsDeleteModalDialog', require('./modal.js').deleteModal)
  .controller('ModalDialogCtrl', require('./modal.js').controller)
  .controller('RuleCtrl', require('./rule.edit.js').controller)
  .controller('CategoryCtrl', require('./category.edit.js').controller)
  .controller('QuestionCtrl', require('./question.js').controller)
  .controller('GrammarCmsCtrl', require('./cms.controller.js'));