$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main_chat_message" data-message-id=${message.id}>
         <div class="main_chat_message_info">
           <div class="main_chat_message_info__talker">
             ${message.user_name}
           </div>
           <div class="main_chat_message_info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main_chat_meesage_text">
           <p class="main_chat_meesage_text_content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main_chat_message" data-message-id=${message.id}>
         <div class="main_chat_message_info">
           <div class="main_chat_message_info__talker">
             ${message.user_name}
           </div>
           <div class="main_chat_message_info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main_chat_meesage_tex">
           <p class="main_chat_meesage_text_content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
 
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $('.submit_btn').removeAttr('data-disable-with');
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })

  .done(function(data){
    var html = buildHTML(data);
    $('.message').append(html);
    $('form')[0].reset();
    $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
 })
});