import jQuery from "./jquery.js"

export function getHeightText( font ){

    let text = jQuery('<span>Hg</span>').css({ fontFamily: font });
    let block = jQuery('<div style="display: inline-block; width: 1px; height: 0;"></div>');
  
    let div = jQuery('<div></div>');
    div.append(text, block);
  
    let body = jQuery('body');
    body.append(div);
  
    let result;
    try {
  
      result = {};
  
      block.css({ verticalAlign: 'baseline' });
      result.ascent = block.offset().top - text.offset().top;
  
      block.css({ verticalAlign: 'bottom' });
      result.height = block.offset().top - text.offset().top;
  
      result.descent = result.height - result.ascent;
  
    } finally {
      div.remove();
    }
  
    return result;
}