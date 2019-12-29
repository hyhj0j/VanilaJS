<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>�̴����� �ε���</title>

<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-push-2">
      <h1 class="text-center">�̴����� �ε���</h1>
      <hr/>
      <br/>
    </div>
  </div>

  <div id="events"></div>
  
  <div class="row" id="list">
    <!-- �Ź� ����Ʈ -->
  </div>
</div>   

<div id="template" style="display: none;">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-success panel-realEstate">
      <div class="panel-heading">
        <h3 class="panel-title">�Ź�</h3>
      </div>
      <div class="panel-body">
        <img style="width: 100%;" src="" >
        <br/><br/>
        <strong>���̵�</strong>: <span class="id"></span><br/>
        <strong>����</strong>: <span class="type"></span><br/>
        <strong>����(m��)</strong>: <span class="area"></span><br/>
        <strong>����(ETH)</strong>: <span class="price"></span><br/><br/>
        <button class="btn btn-info btn-buy" 
                type="button" 
                data-toggle="modal" 
                data-target="#buyModal">
                ����
        </button>
        <button class="btn btn-info btn-buyerInfo" 
                type="button" 
                data-toggle="modal" 
                data-target="#buyerInfoModal" 
                style="display: none;">
                ������ ����
        </button>          
      </div>
    </div>
  </div>
</div>

<div class="modal fade" tabindex="-1" role="dialog" id="buyModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">������ ����</h4>
      </div>
      <div class="modal-body">
        <input type="hidden" id="id" />
        <input type="hidden" id="price" />
        <input type="text" class="form-control" id="name" placeholder="�̸�" /><br/>
        <input type="number" class="form-control" id="age" placeholder="����" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">�ݱ�</button>
        <button type="button" class="btn btn-primary" onclick="App.buyRealEstate(); return false;">����</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="modal fade" tabindex="-1" role="dialog" id="buyerInfoModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">������ ����</h4>
      </div>
      <div class="modal-body">
        <strong>�����ּ�</strong>: <span id="buyerAddress"></span><br/>
        <strong>�̸�</strong>: <span id="buyerName"></span><br/>
        <strong>����</strong>: <span id="buyerAge"></span><br/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">�ݱ�</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->