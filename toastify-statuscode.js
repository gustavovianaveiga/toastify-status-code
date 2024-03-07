import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function showToastByStatusCode(statusCode) {
  switch (statusCode) {
    case 100:
      toast.info('Continue - A solicitação foi recebida e o processo continua.');
      break;
    case 101:
      toast.info('Switching Protocols - O servidor concorda em mudar os protocolos.');
      break;
    case 200:
      toast.success('OK - Requisição bem-sucedida!');
      break;
    case 201:
      toast.success('Created - Recurso criado com sucesso.');
      break;
    case 202:
      toast.success('Accepted - A solicitação foi aceita para processamento.');
      break;
    case 204:
      toast.success('No Content - A solicitação foi processada com sucesso, mas não há conteúdo para retornar.');
      break;
    case 300:
      toast.info('Multiple Choices - A solicitação tem mais de uma resposta possível.');
      break;
    case 301:
      toast.info('Moved Permanently - O recurso solicitado foi movido permanentemente.');
      break;
    case 302:
      toast.info('Found - O recurso solicitado foi encontrado temporariamente em uma nova URL.');
      break;
    case 304:
      toast.info('Not Modified - O recurso não foi modificado desde a última solicitação.');
      break;
    case 400:
      toast.error('Bad Request - Requisição inválida. Por favor, verifique os dados fornecidos.');
      break;
    case 401:
      toast.error('Unauthorized - Não autorizado. Faça login para acessar esta página.');
      break;
    case 403:
      toast.error('Forbidden - Acesso negado. Você não tem permissão para acessar este recurso.');
      break;
    case 404:
      toast.error('Not Found - Recurso não encontrado. Verifique a URL solicitada.');
      break;
    case 405:
      toast.error('Method Not Allowed - Método não permitido para a solicitação.');
      break;
    case 408:
      toast.error('Request Timeout - A solicitação expirou antes que o servidor pudesse processá-la.');
      break;
    case 500:
      toast.error('Internal Server Error - Erro interno do servidor. Por favor, tente novamente mais tarde.');
      break;
    case 501:
      toast.error('Not Implemented - O servidor não suporta a funcionalidade necessária para atender à solicitação.');
      break;
    case 502:
      toast.error('Bad Gateway - O servidor recebeu uma resposta inválida de um servidor intermediário.');
      break;
    case 503:
      toast.error('Service Unavailable - O servidor não está disponível no momento devido a sobrecarga ou manutenção.');
      break;
    case 504:
      toast.error('Gateway Timeout - O servidor intermediário expirou ao aguardar uma resposta do servidor.');
      break;
    default:
      toast.error('Código de status não reconhecido.');
      break;
  }
}
