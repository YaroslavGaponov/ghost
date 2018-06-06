module.exports.opcodes = [{"code":0,"name":"add","args":["Eb","Gb"]},{"code":1,"name":"add","args":["Ev","Gv"]},{"code":2,"name":"add","args":["Gb","Eb"]},{"code":3,"name":"add","args":["Gv","Ev"]},{"code":4,"name":"add","args":["AL","Ib"]},{"code":5,"name":"add","args":["eAX","Iv"]},{"code":6,"name":"push","args":["ES"]},{"code":7,"name":"pop","args":["ES"]},{"code":8,"name":"or","args":["Eb","Gb"]},{"code":9,"name":"or","args":["Ev","Gv"]},{"code":10,"name":"or","args":["Gb","Eb"]},{"code":11,"name":"or","args":["Gv","Ev"]},{"code":12,"name":"or","args":["AL","Ib"]},{"code":13,"name":"or","args":["eAX","Iv"]},{"code":14,"name":"push","args":["CS"]},{"code":15,"name":"escape1","args":[]},{"code":16,"name":"adc","args":["Eb","Gb"]},{"code":17,"name":"adc","args":["Ev","Gv"]},{"code":18,"name":"adc","args":["Gb","Eb"]},{"code":19,"name":"adc","args":["Gv","Ev"]},{"code":20,"name":"adc","args":["AL","Ib"]},{"code":21,"name":"adc","args":["eAX","Iv"]},{"code":22,"name":"push","args":["SS"]},{"code":23,"name":"pop","args":["SS"]},{"code":24,"name":"sbb","args":["Eb","Gb"]},{"code":25,"name":"sbb","args":["Ev","Gv"]},{"code":26,"name":"sbb","args":["Gb","Eb"]},{"code":27,"name":"sbb","args":["Gv","Ev"]},{"code":28,"name":"sbb","args":["AL","Ib"]},{"code":29,"name":"sbb","args":["eAX","Iv"]},{"code":30,"name":"push","args":["DS"]},{"code":31,"name":"pop","args":["DS"]},{"code":32,"name":"and","args":["Eb","Gb"]},{"code":33,"name":"and","args":["Ev","Gv"]},{"code":34,"name":"and","args":["Gb","Eb"]},{"code":35,"name":"and","args":["Gv","Ev"]},{"code":36,"name":"and","args":["AL","Ib"]},{"code":37,"name":"and","args":["eAX","Iv"]},{"code":38,"name":"es:","args":[]},{"code":39,"name":"daa","args":[]},{"code":40,"name":"sub","args":["Eb","Gb"]},{"code":41,"name":"sub","args":["Ev","Gv"]},{"code":42,"name":"sub","args":["Gb","Eb"]},{"code":43,"name":"sub","args":["Gv","Ev"]},{"code":44,"name":"sub","args":["AL","Ib"]},{"code":45,"name":"sub","args":["eAX","Iv"]},{"code":46,"name":"cs:","args":[]},{"code":47,"name":"das","args":[]},{"code":48,"name":"xor","args":["Eb","Gb"]},{"code":49,"name":"xor","args":["Ev","Gv"]},{"code":50,"name":"xor","args":["Gb","Eb"]},{"code":51,"name":"xor","args":["Gv","Ev"]},{"code":52,"name":"xor","args":["AL","Ib"]},{"code":53,"name":"xor","args":["eAX","Iv"]},{"code":54,"name":"ss:","args":[]},{"code":55,"name":"aaa","args":[]},{"code":56,"name":"cmp","args":["Eb","Gb"]},{"code":57,"name":"cmp","args":["Ev","Gv"]},{"code":58,"name":"cmp","args":["Gb","Eb"]},{"code":59,"name":"cmp","args":["Gv","Ev"]},{"code":60,"name":"cmp","args":["AL","Ib"]},{"code":61,"name":"cmp","args":["eAX","Iv"]},{"code":62,"name":"ds:","args":[]},{"code":63,"name":"aas","args":[]},{"code":64,"name":"inc","args":["eAX"]},{"code":65,"name":"inc","args":["eCX"]},{"code":66,"name":"inc","args":["eDX"]},{"code":67,"name":"inc","args":["eBX"]},{"code":68,"name":"inc","args":["eSP"]},{"code":69,"name":"inc","args":["eBP"]},{"code":70,"name":"inc","args":["eSI"]},{"code":71,"name":"inc","args":["eDI"]},{"code":72,"name":"dec","args":["eAX"]},{"code":73,"name":"dec","args":["eCX"]},{"code":74,"name":"dec","args":["eDX"]},{"code":75,"name":"dec","args":["eBX"]},{"code":76,"name":"dec","args":["eSP"]},{"code":77,"name":"dec","args":["eBP"]},{"code":78,"name":"dec","args":["eSI"]},{"code":79,"name":"dec","args":["eDI"]},{"code":80,"name":"push","args":["eAX"]},{"code":81,"name":"push","args":["eCX"]},{"code":82,"name":"push","args":["eDX"]},{"code":83,"name":"push","args":["eBX"]},{"code":84,"name":"push","args":["eSP"]},{"code":85,"name":"push","args":["eBP"]},{"code":86,"name":"push","args":["eSI"]},{"code":87,"name":"push","args":["eDI"]},{"code":88,"name":"pop","args":["eAX"]},{"code":89,"name":"pop","args":["eCX"]},{"code":90,"name":"pop","args":["eDX"]},{"code":91,"name":"pop","args":["eBX"]},{"code":92,"name":"pop","args":["eSP"]},{"code":93,"name":"pop","args":["eBP"]},{"code":94,"name":"pop","args":["eSI"]},{"code":95,"name":"pop","args":["eDI"]},{"code":102,"name":"opsize","args":[]},{"code":107,"name":"imul","args":["Gv","Ev","Ib"]},{"code":112,"name":"jo","args":["Jb"]},{"code":113,"name":"jno","args":["Jb"]},{"code":114,"name":"jb","args":["Jb"]},{"code":115,"name":"jnb","args":["Jb"]},{"code":116,"name":"jz","args":["Jb"]},{"code":117,"name":"jnz","args":["Jb"]},{"code":118,"name":"jbe","args":["Jb"]},{"code":119,"name":"ja","args":["Jb"]},{"code":120,"name":"js","args":["Jb"]},{"code":121,"name":"jns","args":["Jb"]},{"code":122,"name":"jpe","args":["Jb"]},{"code":123,"name":"jpo","args":["Jb"]},{"code":124,"name":"jl","args":["Jb"]},{"code":125,"name":"jge","args":["Jb"]},{"code":126,"name":"jle","args":["Jb"]},{"code":127,"name":"jg","args":["Jb"]},{"code":128,"name":"grp1","args":["Eb","Ib"]},{"code":129,"name":"grp1","args":["Ev","Iv"]},{"code":130,"name":"grp1","args":["Eb","Ib"]},{"code":131,"name":"grp1","args":["Ev","Ib"]},{"code":132,"name":"test","args":["Gb","Eb"]},{"code":133,"name":"test","args":["Gv","Ev"]},{"code":134,"name":"xchg","args":["Gb","Eb"]},{"code":135,"name":"xchg","args":["Gv","Ev"]},{"code":136,"name":"mov","args":["Eb","Gb"]},{"code":137,"name":"mov","args":["Ev","Gv"]},{"code":138,"name":"mov","args":["Gb","Eb"]},{"code":139,"name":"mov","args":["Gv","Ev"]},{"code":140,"name":"mov","args":["Ew","Sw"]},{"code":141,"name":"lea","args":["Gv","M"]},{"code":142,"name":"mov","args":["Sw","Ew"]},{"code":143,"name":"pop","args":["Ev"]},{"code":144,"name":"nop","args":[]},{"code":145,"name":"xchg","args":["eCX eAX"]},{"code":146,"name":"xchg","args":["eDX eAX"]},{"code":147,"name":"xchg","args":["eBX eAX"]},{"code":148,"name":"xchg","args":["eSP eAX"]},{"code":149,"name":"xchg","args":["eBP eAX"]},{"code":150,"name":"xchg","args":["eSI eAX"]},{"code":151,"name":"xchg","args":["eDI eAX"]},{"code":152,"name":"cbw","args":[]},{"code":153,"name":"cwd","args":[]},{"code":154,"name":"call","args":["Ap"]},{"code":155,"name":"wait","args":[]},{"code":156,"name":"pushf","args":[]},{"code":157,"name":"popf","args":[]},{"code":158,"name":"sahf","args":[]},{"code":159,"name":"lahf","args":[]},{"code":160,"name":"mov","args":["AL","Ob"]},{"code":161,"name":"mov","args":["eAX","Ov"]},{"code":162,"name":"mov","args":["Ob","AL"]},{"code":163,"name":"mov","args":["Ov","eAX"]},{"code":164,"name":"movsb","args":[]},{"code":165,"name":"movsw","args":[]},{"code":166,"name":"cmpsb","args":[]},{"code":167,"name":"cmpsw","args":[]},{"code":168,"name":"test","args":["AL","Ib"]},{"code":169,"name":"test","args":["eAX","Iv"]},{"code":170,"name":"stosb","args":[]},{"code":171,"name":"stosw","args":[]},{"code":172,"name":"lodsb","args":[]},{"code":173,"name":"lodsw","args":[]},{"code":174,"name":"scasb","args":[]},{"code":175,"name":"scasw","args":[]},{"code":176,"name":"mov","args":["AL","Ib"]},{"code":177,"name":"mov","args":["CL","Ib"]},{"code":178,"name":"mov","args":["DL","Ib"]},{"code":179,"name":"mov","args":["BL","Ib"]},{"code":180,"name":"mov","args":["AH","Ib"]},{"code":181,"name":"mov","args":["CH","Ib"]},{"code":182,"name":"mov","args":["DH","Ib"]},{"code":183,"name":"mov","args":["BH","Ib"]},{"code":184,"name":"mov","args":["eAX","Iv"]},{"code":185,"name":"mov","args":["eCX","Iv"]},{"code":186,"name":"mov","args":["eDX","Iv"]},{"code":187,"name":"mov","args":["eBX","Iv"]},{"code":188,"name":"mov","args":["eSP","Iv"]},{"code":189,"name":"mov","args":["eBP","Iv"]},{"code":190,"name":"mov","args":["eSI","Iv"]},{"code":191,"name":"mov","args":["eDI","Iv"]},{"code":192,"name":"escape2","args":[]},{"code":193,"name":"grp2","args":["Ev","Ib"]},{"code":194,"name":"ret","args":["Iw"]},{"code":195,"name":"ret","args":[]},{"code":196,"name":"les","args":["Gv","Mp"]},{"code":197,"name":"lds","args":["Gv","Mp"]},{"code":198,"name":"mov","args":["Eb","Ib"]},{"code":199,"name":"mov","args":["Ev","Iv"]},{"code":201,"name":"leave","args":[]},{"code":202,"name":"retf","args":["Iw"]},{"code":203,"name":"retf","args":[]},{"code":204,"name":"int","args":["3"]},{"code":205,"name":"int","args":["Ib"]},{"code":206,"name":"into","args":[]},{"code":207,"name":"iret","args":[]},{"code":208,"name":"grp2","args":["Eb","1"]},{"code":209,"name":"grp2","args":["Ev","1"]},{"code":210,"name":"grp2","args":["Eb","CL"]},{"code":211,"name":"grp2","args":["Ev","CL"]},{"code":212,"name":"aam","args":["I0"]},{"code":213,"name":"aad","args":["I0"]},{"code":215,"name":"xlat","args":[]},{"code":224,"name":"loopnz","args":["Jb"]},{"code":225,"name":"loopz","args":["Jb"]},{"code":226,"name":"loop","args":["Jb"]},{"code":227,"name":"jcxz","args":["Jb"]},{"code":228,"name":"in","args":["AL","Ib"]},{"code":229,"name":"in","args":["eAX","Ib"]},{"code":230,"name":"out","args":["Ib","AL"]},{"code":231,"name":"out","args":["Ib","eAX"]},{"code":232,"name":"call","args":["Jv"]},{"code":233,"name":"jmp","args":["Jv"]},{"code":234,"name":"jmp","args":["Ap"]},{"code":235,"name":"jmp","args":["Jb"]},{"code":236,"name":"in","args":["AL","DX"]},{"code":237,"name":"in","args":["eAX","DX"]},{"code":238,"name":"out","args":["DX","AL"]},{"code":239,"name":"out","args":["DX","eAX"]},{"code":240,"name":"lock","args":[]},{"code":242,"name":"repnz","args":[]},{"code":243,"name":"repz","args":[]},{"code":244,"name":"hlt","args":[]},{"code":245,"name":"cmc","args":[]},{"code":246,"name":"grp3a","args":["Eb"]},{"code":247,"name":"grp3b","args":["Ev"]},{"code":248,"name":"clc","args":[]},{"code":249,"name":"stc","args":[]},{"code":250,"name":"cli","args":[]},{"code":251,"name":"sti","args":[]},{"code":252,"name":"cld","args":[]},{"code":253,"name":"std","args":[]},{"code":254,"name":"grp4","args":["Eb"]},{"code":255,"name":"grp5","args":["Ev"]}];
module.exports.ext_opcodes = {"grp1":[{"name":"add","args":[]},{"name":"or","args":[]},{"name":"adc","args":[]},{"name":"sbb","args":[]},{"name":"and","args":[]},{"name":"sub","args":[]},{"name":"xor","args":[]},{"name":"cmp","args":[]}],"grp2":[{"name":"rol","args":[]},{"name":"ror","args":[]},{"name":"rcl","args":[]},{"name":"rcr","args":[]},{"name":"shl","args":[]},{"name":"shr","args":[]},null,{"name":"sar","args":[]}],"grp3a":[{"name":"test","args":["Eb","Ib"]},null,{"name":"not","args":[]},{"name":"neg","args":[]},{"name":"mul","args":[]},{"name":"imul","args":[]},{"name":"div","args":[]},{"name":"idiv","args":[]}],"grp3b":[{"name":"test","args":["Ev","Iv"]},null,{"name":"not","args":[]},{"name":"neg","args":[]},{"name":"mul","args":[]},{"name":"imul","args":[]},{"name":"div","args":[]},{"name":"idiv","args":[]}],"grp4":[{"name":"inc","args":[]},{"name":"dec","args":[]}],"grp5":[{"name":"inc","args":[]},{"name":"dec","args":[]},{"name":"call","args":[]},{"name":"call","args":["Mp"]},{"name":"jmp","args":[]},{"name":"jmp","args":["Mp"]},{"name":"push","args":[]}]};
module.exports.esc_opcodes = {"escape1":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"name":"jc","args":["Jw"]},null,{"name":"jz","args":["Jw"]},{"name":"jnz","args":["Jw"]}],"escape2":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"name":"shl","args":["Gb","Ib"]},null,null,null,null,null,null,{"name":"shr","args":["Gb","Ib"]}]};
